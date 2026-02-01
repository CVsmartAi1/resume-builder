'use client';

import { CVProvider } from '@/context/cv-context';
import { ResumeEditor } from '@/components/resume/ResumeEditor';

export default function EditCVPage() {
  return (
    <CVProvider>
      <ResumeEditor />
    </CVProvider>
  );
}
