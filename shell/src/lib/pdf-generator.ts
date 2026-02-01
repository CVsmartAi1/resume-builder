'use client';

import { useState, useRef } from 'react';
import { CV } from '@/lib/cv-schema';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Download, Loader2, FileText } from 'lucide-react';

// Note: In a real implementation, you would import:
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

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
      // Simulate PDF generation steps
      setProgress(25);
      await new Promise((resolve) => setTimeout(resolve, 300));

      setProgress(50);
      await new Promise((resolve) => setTimeout(resolve, 300));

      setProgress(75);
      await new Promise((resolve) => setTimeout(resolve, 300));

      setProgress(100);
      await new Promise((resolve) => setTimeout(resolve, 200));

      // Create a simple text representation for download
      // In production, use html2canvas + jsPDF or @react-pdf/renderer
      const content = generateTextContent(cv);
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${cv.personalInfo.firstName}_${cv.personalInfo.lastName}_Resume.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      // Alternative: In production implementation with html2canvas + jsPDF:
      /*
      if (previewRef?.current) {
        const canvas = await html2canvas(previewRef.current, {
          scale: 2,
          useCORS: true,
          logging: false,
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        
        pdf.addImage(
          imgData,
          'PNG',
          0,
          0,
          imgWidth * ratio,
          imgHeight * ratio
        );
        
        pdf.save(`${cv.personalInfo.firstName}_${cv.personalInfo.lastName}_Resume.pdf`);
      }
      */
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
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      const content = generateTextContent(cv);
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${cv.personalInfo.firstName}_${cv.personalInfo.lastName}_Resume.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
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
      title="Download PDF"
    >
      {isGenerating ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Download className="h-4 w-4" />
      )}
    </Button>
  );
}

// Generate text content for download
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
  if (personalInfo.linkedin) content += `LinkedIn: ${personalInfo.linkedin}\n`;
  if (personalInfo.website) content += `Website: ${personalInfo.website}\n`;
  if (personalInfo.github) content += `GitHub: ${personalInfo.github}\n`;
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
      content += `${exp.company}`;
      if (exp.location) content += ` - ${exp.location}`;
      content += '\n';
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
      content += `${edu.degree}`;
      if (edu.fieldOfStudy) content += ` in ${edu.fieldOfStudy}`;
      content += '\n';
      content += `${edu.startDate} - ${edu.current ? 'Present' : edu.endDate}\n`;
      if (edu.gpa) content += `GPA: ${edu.gpa}\n`;
      if (edu.description) content += `${edu.description}\n`;
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

// PDF Generator Hook for programmatic use
export function usePDFGenerator() {
  const generate = async (cv: CV): Promise<Blob> => {
    // Simulate PDF generation
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const content = generateTextContent(cv);
    return new Blob([content], { type: 'text/plain' });
  };

  const download = async (cv: CV, filename?: string) => {
    const blob = await generate(cv);
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || `${cv.personalInfo.firstName}_${cv.personalInfo.lastName}_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return { generate, download };
}
