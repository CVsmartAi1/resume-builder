'use client';

import { useState, useRef } from 'react';
import { CV } from '@/lib/cv-schema';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Download, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PDFGeneratorProps {
  cv: CV;
  previewRef?: React.RefObject<HTMLDivElement>;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function PDFGenerator({
  cv,
  previewRef,
  className,
  variant = 'default',
  size = 'default',
}: PDFGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const generatePDF = async () => {
    setIsGenerating(true);
    setProgress(0);

    try {
      // Find the preview element
      const element = previewRef?.current || document.querySelector('[data-resume-preview]') as HTMLElement;
      
      if (!element) {
        console.error('No resume preview element found');
        return;
      }

      setProgress(25);

      // Capture the resume as canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      setProgress(75);

      // Create PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      
      // Calculate scale to fit A4
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const scaledWidth = imgWidth * ratio;
      const scaledHeight = imgHeight * ratio;
      
      // Center the image on the page
      const x = (pdfWidth - scaledWidth) / 2;
      const y = (pdfHeight - scaledHeight) / 2;

      pdf.addImage(imgData, 'PNG', x, y, scaledWidth, scaledHeight);

      setProgress(100);

      // Download
      const filename = `${cv.personalInfo.firstName || 'Resume'}_${cv.personalInfo.lastName || ''}_CV.pdf`.replace(/\s+/g, '_');
      pdf.save(filename);
    } catch (error) {
      console.error('PDF generation failed:', error);
    } finally {
      setIsGenerating(false);
      setProgress(0);
    }
  };

  return (
    <Button
      onClick={generatePDF}
      disabled={isGenerating}
      variant={variant}
      size={size}
      className={cn(className)}
    >
      {isGenerating ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          {progress}%
        </>
      ) : (
        <>
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </>
      )}
    </Button>
  );
}

// Download button for CVsList
interface DownloadButtonProps {
  cv: CV;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function DownloadButton({
  cv,
  className,
  variant = 'ghost',
  size = 'icon',
}: DownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    
    try {
      // Create a temporary container for rendering the CV
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.width = '210mm';
      container.style.background = 'white';
      document.body.appendChild(container);

      // Import the template component dynamically based on CV template
      const { ModernTemplate } = await import('@/components/resume/templates/ModernTemplate');
      const { ClassicTemplate } = await import('@/components/resume/templates/ClassicTemplate');
      const { CreativeTemplate } = await import('@/components/resume/templates/CreativeTemplate');

      // Render the appropriate template
      // Note: This is a simplified approach - in a real app, you'd use ReactDOMServer
      // For now, we'll use text fallback for the list view
      const content = generateTextContent(cv);
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${cv.personalInfo.firstName || 'Resume'}_${cv.personalInfo.lastName || ''}_Resume.txt`.replace(/\s+/g, '_');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      document.body.removeChild(container);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isGenerating}
      variant={variant}
      size={size}
      className={cn(className)}
      title="Download Resume"
    >
      {isGenerating ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Download className="h-4 w-4" />
      )}
    </Button>
  );
}

// Generate text content for download (fallback)
function generateTextContent(cv: CV): string {
  const { personalInfo, experience, education, skills } = cv;
  
  let content = '';
  content += `${personalInfo.firstName} ${personalInfo.lastName}\n`;
  content += '='.repeat(50) + '\n\n';
  
  if (personalInfo.profession) {
    content += `${personalInfo.profession}\n\n`;
  }
  
  // Contact
  content += 'CONTACT\n';
  content += '-'.repeat(30) + '\n';
  if (personalInfo.email) content += `Email: ${personalInfo.email}\n`;
  if (personalInfo.phone) content += `Phone: ${personalInfo.phone}\n`;
  if (personalInfo.address || personalInfo.city || personalInfo.country) {
    content += `Address: ${[personalInfo.address, personalInfo.city, personalInfo.country].filter(Boolean).join(', ')}\n`;
  }
  content += '\n';
  
  // Summary
  if (personalInfo.summary) {
    content += 'PROFESSIONAL SUMMARY\n';
    content += '-'.repeat(30) + '\n';
    content += `${personalInfo.summary}\n\n`;
  }
  
  // Experience
  if (experience.length > 0) {
    content += 'WORK EXPERIENCE\n';
    content += '-'.repeat(30) + '\n';
    experience.forEach((exp) => {
      content += `${exp.position}\n`;
      content += `${exp.company}\n`;
      content += `${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}\n`;
      if (exp.description) content += `${exp.description}\n`;
      content += '\n';
    });
  }
  
  // Education
  if (education.length > 0) {
    content += 'EDUCATION\n';
    content += '-'.repeat(30) + '\n';
    education.forEach((edu) => {
      content += `${edu.school}\n`;
      content += `${edu.degree}\n`;
      content += `${edu.startDate} - ${edu.current ? 'Present' : edu.endDate}\n`;
      content += '\n';
    });
  }
  
  // Skills
  if (skills.length > 0) {
    content += 'SKILLS\n';
    content += '-'.repeat(30) + '\n';
    content += skills.join(', ') + '\n';
  }
  
  return content;
}

// Hook for programmatic PDF generation
export function usePDFGenerator() {
  const generate = async (cv: CV, element?: HTMLElement): Promise<Blob> => {
    const targetElement = element || document.querySelector('[data-resume-preview]') as HTMLElement;
    
    if (!targetElement) {
      throw new Error('No resume element found');
    }

    const canvas = await html2canvas(targetElement, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const scaledWidth = imgWidth * ratio;
    const scaledHeight = imgHeight * ratio;
    
    const x = (pdfWidth - scaledWidth) / 2;
    const y = (pdfHeight - scaledHeight) / 2;

    pdf.addImage(imgData, 'PNG', x, y, scaledWidth, scaledHeight);

    return pdf.output('blob');
  };

  const download = async (cv: CV, element?: HTMLElement, filename?: string) => {
    const blob = await generate(cv, element);
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || `${cv.personalInfo.firstName || 'Resume'}_${cv.personalInfo.lastName || ''}_CV.pdf`.replace(/\s+/g, '_');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return { generate, download };
}
