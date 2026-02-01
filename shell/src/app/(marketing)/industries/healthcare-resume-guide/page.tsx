import { ArticleLayout } from '@/components/marketing';
import { Stethoscope, Heart, ClipboardList, Award } from 'lucide-react';

export const metadata = {
  title: 'Healthcare Resume Guide: Nursing, Medical &amp; Clinical Resumes',
  description: 'Complete guide to writing healthcare resumes for nurses, doctors, medical assistants, and healthcare professionals. ATS tips and examples.',
};

const toc = [
  { id: 'overview', title: 'Healthcare Resume Overview' },
  { id: 'licenses', title: 'Licenses &amp; Certifications' },
  { id: 'clinical-skills', title: 'Clinical Skills' },
  { id: 'experience', title: 'Professional Experience' },
  { id: 'faq', title: 'FAQ' },
];

export default function HealthcareResumeGuide() {
  return (
    <ArticleLayout
      title="Healthcare Resume Guide: Nursing, Medical &amp; Clinical Resumes"
      description="Complete guide to writing healthcare resumes for nurses, doctors, medical assistants, and healthcare professionals. ATS tips and examples."
      keywords={['healthcare resume', 'nursing resume', 'medical resume', 'clinical resume', 'healthcare CV']}
      heroTitle="Healthcare Resume Guide"
      heroSubtitle="Care for your career with a professional resume"
      heroIcon={<Stethoscope className="h-10 w-10 text-white" />}
      heroGradient="pink"
      toc={toc}
      publishDate="2025-01-20"
      readTime="8 min read"
      authorName="Dr. Patricia Moore"
      authorTitle="Healthcare Recruiter"
    >
      <section id="overview">
        <h2>Healthcare Resume Overview</h2>
        
        <p>
          Healthcare resumes require precision, attention to detail, and clear demonstration of clinical 
          competencies. Your resume must showcase your licenses, certifications, specialized skills, and 
          patient care experience while maintaining HIPAA compliance.
        </p>
      </section>

      <section id="licenses">
        <h2>Licenses &amp; Certifications</h2>
        
        <p>Healthcare credentials are non-negotiable. Display them prominently:</p>
        
        <ul>
          <li><strong>License numbers:</strong> Include state and license number for verification</li>
          <li><strong>Expiration dates:</strong> Show current status</li>
          <li><strong>BLS/ACLS/PALS:</strong> Include certification dates</li>
          <li><strong>Specialty certifications:</strong> CCRN, CEN, CNOR, etc.</li>
        </ul>
      </section>

      <section id="clinical-skills">
        <h2>Clinical Skills</h2>
        
        <p>Detail your clinical competencies by category:</p>
        
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-pink-50 p-4 rounded-lg">
            <h4>Patient Care</h4>
            <p className="text-gray-600">Assessment, medication administration, wound care, IV therapy</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4>Equipment</h4>
            <p className="text-gray-600">Ventilators, cardiac monitors, dialysis machines, EMR systems</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4>Specialized Procedures</h4>
            <p className="text-gray-600">Chemotherapy, central line care, sedation, emergency response</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4>Documentation</h4>
            <p className="text-gray-600">Epic, Cerner, Allscripts, MEDITECH, point-of-care charting</p>
          </div>
        </div>
      </section>

      <section id="experience">
        <h2>Professional Experience</h2>
        
        <p>Quantify patient care and clinical impact:</p>
        
        <div className="bg-green-50 p-6 rounded-lg my-6">
          <h3 className="text-green-900">Effective Example</h3>
          <p className="text-green-800 mt-2">
            "Managed care for 6-8 patients per shift in busy ICU, maintaining 95% patient satisfaction 
            scores and zero medication errors over 2 years"
          </p>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>Should new grads include clinical rotations?</h3>
            <p>Yes, treat them like professional experience. Include hours, patient populations, and skills developed.</p>
          </div>
          
          <div>
            <h3>How do I show travel nursing experience?</h3>
            <p>List your agency as employer and detail assignments separately. Highlight adaptability and diverse experience.</p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
