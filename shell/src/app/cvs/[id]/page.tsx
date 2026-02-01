'use client';

import { useParams } from 'next/navigation';
import { CVProvider } from '@/context/cv-context';
import { ResumeEditor } from '@/components/resume/ResumeEditor';

export default function EditCVPage() {
  const params = useParams();
  const cvId = params.id as string;

  return (
    <CVProvider cvId={cvId}>
      <ResumeEditor cvId={cvId} />
    </CVProvider>
  );
}
