'use client';

import { useCV } from '@/context/cv-context';
import { CV } from '@/lib/cv-schema';
import { ModernTemplate } from './templates/ModernTemplate';
import { ClassicTemplate } from './templates/ClassicTemplate';
import { CreativeTemplate } from './templates/CreativeTemplate';
import { cn } from '@/lib/utils';

interface ResumePreviewProps {
  cv?: CV;
  className?: string;
  scale?: number;
}

export function ResumePreview({ cv: propCv, className, scale = 1 }: ResumePreviewProps) {
  const { cv: contextCv } = useCV();
  const cv = propCv || contextCv;
  const renderTemplate = () => {
    switch (cv.template) {
      case 'classic':
        return <ClassicTemplate cv={cv} />;
      case 'creative':
        return <CreativeTemplate cv={cv} />;
      case 'modern':
      default:
        return <ModernTemplate cv={cv} />;
    }
  };

  return (
    <div
      className={cn(
        'bg-white shadow-lg overflow-hidden',
        className
      )}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
        width: '210mm',
        minHeight: '297mm',
        margin: '0 auto',
      }}
    >
      {renderTemplate()}
    </div>
  );
}

// Preview wrapper with fixed container
export function ResumePreviewContainer({
  cv,
  className,
}: {
  cv?: CV;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'bg-muted/30 rounded-lg overflow-auto p-4 flex justify-center',
        className
      )}
      style={{ maxHeight: 'calc(100vh - 200px)' }}
    >
      <ResumePreview cv={cv} scale={0.75} />
    </div>
  );
}
