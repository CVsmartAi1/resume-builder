'use client';

import { CVProvider } from '@/context/cv-context';
import { ResumeEditor } from '@/components/resume/ResumeEditor';
import { useParams } from 'next/navigation';

export default function EditCVPage() {
  const params = useParams();
  const cvId = params?.id as string;

  return (
    <CVProvider cvId={cvId}>
      <ResumeEditor />
    </CVProvider>
  );
}
