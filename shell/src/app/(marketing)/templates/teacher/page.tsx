import { ArticleLayout } from '@/components/marketing';
import { TemplateShowcase } from '@/components/marketing/TemplateShowcase';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

export const metadata = {
  title: 'Teacher Resume Template | ATS-Friendly Format',
  description: 'Create a professional teacher resume with our ATS-friendly template. Showcase your teaching experience, certifications, and student impact.',
};

const toc = [
  { id: 'overview', title: 'Template Overview' },
  { id: 'key-sections', title: 'Key Sections' },
  { id: 'tips', title: 'Writing Tips for Teachers' },
  { id: 'keywords', title: 'Essential Keywords' },
  { id: 'example', title: 'Resume Example' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

export default function TeacherTemplate() {
  return (
    <ArticleLayout
      title="Teacher Resume Template"
      description="Create a professional teacher resume with our ATS-friendly template. Showcase your teaching experience, certifications, and student impact."
      keywords={['teacher resume', 'educator resume', 'teaching resume template', 'elementary teacher resume']}
      heroTitle="Teacher Resume Template"
      heroSubtitle="Educate employers about your teaching excellence"
      heroIcon={<GraduationCap className="h-10 w-10 text-white" />}
      heroGradient="blue"
      toc={toc}
      publishDate="2025-01-15"
      readTime="7 min read"
      authorName="Dr. Linda Thompson"
      authorTitle="Education Recruiter"
    >
      <section id="overview">
        <p className="lead text-xl text-gray-600 mb-6">
          Teachers shape the future through education and mentorship. Your resume must demonstrate 
          your teaching philosophy, classroom management skills, curriculum development experience, 
          and most importantly, your positive impact on student learning and development.
        </p>
        
        <div className="my-8">
          <TemplateShowcase role="Teacher" accentColor="bg-blue-600" />
        </div>
      </section>

      <section id="key-sections">
        <h2>Essential Resume Sections for Teachers</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="flex items-center gap-2">
              <Award className="h-5 w-5 text-blue-600" />
              Teaching Certifications
            </h3>
            <p>
              Prominently display your teaching license(s), state, subject areas, and grade levels. 
              Include endorsements, ESL certifications, or special education credentials. These are 
              essential for ATS screening and hiring decisions.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-green-600" />
              Curriculum &amp; Instruction
            </h3>
            <p>
              Highlight your experience with lesson planning, curriculum development, differentiated 
              instruction, and assessment strategies. Include specific programs or methodologies you've used.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              Student Impact
            </h3>
            <p>
              Quantify your teaching effectiveness: test score improvements, graduation rates, 
              student growth data, and classroom management achievements. Show how you've made a difference.
            </p>
          </div>
        </div>
      </section>

      <section id="tips">
        <h2>Expert Writing Tips for Teachers</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3>Quantify Student Impact</h3>
            <ul>
              <li>"Increased reading proficiency scores by 25% over one academic year"</li>
              <li>"Improved student pass rates from 70% to 95% on state assessments"</li>
              <li>"Managed classroom of 28 diverse learners with 98% attendance rate"</li>
              <li>"Implemented STEM program engaging 100+ students in hands-on learning"</li>
            </ul>
          </div>
          
          <div>
            <h3>Show Leadership &amp; Collaboration</h3>
            <ul>
              <li>Department chair or team lead experience</li>
              <li>Mentoring student teachers or new faculty</li>
              <li>Parent communication and engagement</li>
              <li>Committee participation and professional development</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="keywords">
        <h2>Essential Keywords for Teacher Resumes</h2>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Teaching Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['Curriculum Development', 'Lesson Planning', 'Differentiated Instruction', 'Classroom Management', 'Assessment', 'IEPs'].map(k => (
                <span key={k} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Subjects/Grade Levels</h4>
            <div className="flex flex-wrap gap-2">
              {['Elementary', 'Middle School', 'High School', 'Math', 'Science', 'ELA', 'Special Education'].map(k => (
                <span key={k} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Certifications</h4>
            <div className="flex flex-wrap gap-2">
              {['State Teaching License', 'ESL/ELL', 'Special Education', 'Reading Specialist', 'Gifted Education', 'National Board'].map(k => (
                <span key={k} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="example">
        <h2>Teacher Resume Example</h2>
        
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`SARAH JOHNSON
Elementary School Teacher | Boston, MA | sarah.j@email.com | linkedin.com/in/sarahj

CERTIFICATIONS
• Massachusetts Professional Teaching License - Elementary Education (Grades 1-6)
• ESL Endorsement | Special Education Certification
• License #TL123456 | Expires: 2027

PROFESSIONAL SUMMARY
Dedicated and passionate Elementary School Teacher with 6+ years of experience fostering 
student growth and creating inclusive learning environments. Expert in differentiated 
instruction, classroom management, and data-driven teaching. Consistently achieve above-average 
student outcomes on standardized assessments while building strong relationships with students, 
parents, and colleagues.

TEACHING EXPERTISE
• Instruction: Differentiated instruction, project-based learning, literacy development, STEM integration
• Assessment: Formative/summative assessment, data analysis, progress monitoring, RTI implementation
• Technology: Google Classroom, SMART Board, Seesaw, educational apps, virtual instruction
• Classroom: Behavior management, inclusive practices, IEP/504 implementation, parent communication

PROFESSIONAL EXPERIENCE

4th Grade Teacher | Lincoln Elementary School | Aug 2019 - Present
• Design and implement engaging lessons for 25 diverse learners, adapting instruction to meet varied needs
• Increase student reading proficiency by 30% through targeted intervention and guided reading groups
• Integrate technology to enhance learning; maintain class website and digital portfolio system
• Serve as Grade Level Chair, leading 4-person team in curriculum planning and assessment alignment
• Mentor 2 student teachers through structured practicum experiences
• Facilitate monthly parent workshops on supporting literacy at home

3rd Grade Teacher | Roosevelt Elementary | Aug 2017 - Jun 2019
• Taught all subjects to 22 students in inclusive classroom setting
• Collaborated with special education team to implement IEP accommodations and modifications
• Organized school-wide Science Fair with 200+ student participants
• Received "Teacher of the Year" nomination from parent association

EDUCATION
M.Ed. Curriculum & Instruction | Boston University | 2019
B.S. Elementary Education | University of Massachusetts | 2017
GPA: 3.9/4.0 | Summa Cum Laude

PROFESSIONAL DEVELOPMENT
• Project-Based Learning Certification - Buck Institute
• Responsive Classroom Training
• Google Certified Educator Level 2`}</pre>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3>Should substitute teaching be included on a teacher resume?</h3>
            <p>
              Yes, especially for new teachers or career changers. Substitute teaching demonstrates 
              classroom management skills, adaptability, and commitment to education. Highlight the 
              variety of grade levels and subjects you've covered, as well as any long-term assignments.
            </p>
          </div>
          
          <div>
            <h3>How do I show remote teaching experience?</h3>
            <p>
              Remote teaching requires unique skills. Highlight your technology proficiency, engagement 
              strategies for virtual learning, parent communication in remote settings, and any 
              innovations you developed for online instruction.
            </p>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
}
