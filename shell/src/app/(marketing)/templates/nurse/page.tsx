import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { Heart, Stethoscope, Activity, ClipboardList } from 'lucide-react';

export const metadata = {
  title: 'Nurse Resume Template | ATS-Friendly Format',
  description: 'Create a professional nurse resume with our ATS-friendly template. Showcase your clinical skills, patient care experience, and nursing certifications.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Nurses' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function NurseTemplate() {
  return (
    <ArticleLayout
      title="Nurse Resume Template"
      description="Create a professional nurse resume with our ATS-friendly template. Showcase your clinical skills, patient care experience, and nursing certifications."
      keywords={['nurse resume', 'RN resume', 'nursing resume template', 'registered nurse resume']}
      heroTitle="Nurse Resume Template"
      heroSubtitle="Care for your career with a standout resume"
      heroIcon={<Heart className="h-10 w-10 text-white" />}
      heroGradient="pink"
      toc={toc}
      publishDate="2025-01-15"
      readTime="7 min read"
      authorName="Patricia Moore"
      authorTitle="Healthcare Recruiter"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          Nurses are the heart of healthcare delivery. Your resume must demonstrate your clinical expertise, 
          compassionate patient care, ability to work in fast-paced environments, and specialized skills 
          or certifications that set you apart in a competitive field.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Registered Nurse" accentColor="bg-pink-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Nurses</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-pink-500">
            <h3 className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-pink-600" />
              Licenses &amp; Certifications
            </h3>
            <p>
              Prominently display your RN license, state, and number. Include certifications like BLS, ACLS, 
              PALS, and any specialty certifications (CCRN, CEN, etc.). These are critical for ATS screening.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-600" />
              Clinical Skills
            </h3>
            <p>
              Detail your clinical competencies: patient assessment, medication administration, wound care, 
              EHR proficiency, and specialized procedures relevant to your target unit or specialty.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-green-600" />
              Patient Care Achievements
            </h3>
            <p>
              Quantify your patient care impact: patient satisfaction scores, caseload size, quality metrics, 
              and any awards or recognition received for exceptional care.
            </p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Writing Tips for Nurses</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3>Quantify Patient Care</h3>
            <ul>
              <li>"Managed caseload of 6-8 patients in busy medical-surgical unit"</li>
              <li>"Maintained 95% patient satisfaction scores over 2 years"</li>
              <li>"Administered medications to 30+ patients per shift"</li>
              <li>"Reduced medication errors by 50% through double-check protocol"</li>
            </ul>
          </div>
          
          <div>
            <h3>Show Specialized Experience</h3>
            <ul>
              <li>Specific unit experience (ICU, ER, OR, pediatrics, etc.)</li>
              <li>Equipment proficiency ( ventilators, cardiac monitors, IV pumps)</li>
              <li>EMR systems (Epic, Cerner, Allscripts)</li>
              <li>Charge nurse or preceptor experience</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords">
        <h2>Essential Keywords for Nurse Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Clinical Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['Patient Assessment', 'Medication Administration', 'Wound Care', 'IV Therapy', 'EHR', 'CPR'].map(k => (
                <span key={k} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
            <div className="flex flex-wrap gap-2">
              {['ICU', 'ER', 'Med-Surg', 'Pediatrics', 'Oncology', 'Labor & Delivery'].map(k => (
                <span key={k} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Certifications</h4>
            <div className="flex flex-wrap gap-2">
              {['RN', 'BLS', 'ACLS', 'PALS', 'CCRN', 'CEN'].map(k => (
                <span key={k} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example">
        <h2>Nurse Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`JENNIFER GARCIA, RN, BSN
Registered Nurse | Phoenix, AZ | jennifer.g@email.com | linkedin.com/in/jenniferg

LICENSES & CERTIFICATIONS
• Registered Nurse (RN) - Arizona License #RN123456 | Expires: 2027
• Basic Life Support (BLS) - American Heart Association
• Advanced Cardiac Life Support (ACLS)
• Pediatric Advanced Life Support (PALS)

PROFESSIONAL SUMMARY
Compassionate and dedicated Registered Nurse with 4+ years of experience in fast-paced 
medical-surgical and emergency department settings. Proven ability to deliver high-quality 
patient care, manage critical situations, and collaborate effectively with interdisciplinary 
teams. Committed to patient advocacy and continuous quality improvement.

CLINICAL SKILLS
• Patient Care: Assessment, medication administration, wound care, IV therapy, catheterization
• Critical Care: Cardiac monitoring, ventilator management, trauma stabilization
• Technology: Epic EMR, Philips monitors, Alaris IV pumps, glucometers
• Specialized: Chemotherapy administration, central line care, chest tube management

PROFESSIONAL EXPERIENCE

Registered Nurse - Emergency Department | City Medical Center | Mar 2021 - Present
• Provide emergency care to 50+ patients per shift in Level II Trauma Center
• Triage patients, initiate treatment protocols, and coordinate with physicians and specialists
• Administer medications, perform wound care, and assist with emergency procedures
• Mentor 3 new graduate nurses through structured preceptor program
• Maintain 96% patient satisfaction scores; received Daisy Award nomination 2022
• Participate in quality improvement initiative reducing door-to-doctor time by 15%

Registered Nurse - Medical-Surgical Unit | Regional Hospital | Jun 2019 - Feb 2021
• Managed care for 6-8 patients per shift with diverse medical conditions
• Administered medications, monitored vital signs, and documented care in Epic EMR
• Collaborated with interdisciplinary team to develop and implement patient care plans
• Served as charge nurse, coordinating staffing and patient flow for 30-bed unit
• Precepted 4 nursing students and 2 new hires

EDUCATION
Bachelor of Science in Nursing (BSN) | Arizona State University | 2019
GPA: 3.8/4.0 | Sigma Theta Tau Honor Society

AWARDS
• Daisy Award Nominee - City Medical Center, 2022
• Employee of the Month - Regional Hospital, 2020`}</pre>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>Should new grad nurses include clinical rotations?</h3>
            <p>
              Yes! For new graduates, clinical rotations are your primary experience. List relevant 
              rotations with hours, types of patients cared for, and skills developed. Highlight any 
              leadership roles, honors, or special projects during nursing school.
            </p>
          </div>
          
          <div>
            <h3>How do I show travel nursing experience on my resume?</h3>
            <p>
              List your travel nursing agency as the employer and detail each assignment separately 
              or group similar assignments. Highlight your adaptability, quick learning, and the 
              variety of EMR systems and hospital protocols you've mastered.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
