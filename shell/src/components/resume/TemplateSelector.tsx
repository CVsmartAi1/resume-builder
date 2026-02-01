'use client';

import { useCV } from '@/context/cv-context';
import { TemplateType } from '@/lib/cv-schema';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, Layout, BookOpen, Palette } from 'lucide-react';

interface TemplateOption {
  id: TemplateType;
  name: string;
  description: string;
  icon: React.ReactNode;
  preview: React.ReactNode;
}

const templates: TemplateOption[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean, professional 2-column layout',
    icon: <Layout className="h-5 w-5" />,
    preview: <ModernPreview />,
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional single-column design',
    icon: <BookOpen className="h-5 w-5" />,
    preview: <ClassicPreview />,
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Modern with vibrant accent colors',
    icon: <Palette className="h-5 w-5" />,
    preview: <CreativePreview />,
  },
];

interface TemplateSelectorProps {
  className?: string;
  onSelect?: (template: TemplateType) => void;
}

export function TemplateSelector({ className, onSelect }: TemplateSelectorProps) {
  const { cv, setTemplate } = useCV();

  const handleSelect = (template: TemplateType) => {
    setTemplate(template);
    onSelect?.(template);
  };

  return (
    <div className={cn('space-y-4', className)}>
      <h3 className="font-semibold text-lg">Choose a Template</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={cn(
              'cursor-pointer transition-all hover:shadow-md',
              cv.template === template.id
                ? 'ring-2 ring-primary ring-offset-2'
                : 'hover:border-primary/50'
            )}
            onClick={() => handleSelect(template.id)}
          >
            <CardContent className="p-4">
              {/* Preview */}
              <div className="aspect-[3/4] bg-muted rounded-md mb-3 overflow-hidden border">
                {template.preview}
              </div>

              {/* Info */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    {template.icon}
                    <h4 className="font-semibold">{template.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {template.description}
                  </p>
                </div>
                {cv.template === template.id && (
                  <div className="bg-primary text-primary-foreground rounded-full p-1">
                    <Check className="h-4 w-4" />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Mini Preview Components
function ModernPreview() {
  return (
    <div className="h-full bg-white">
      <div className="h-1/4 bg-slate-800"></div>
      <div className="flex h-3/4">
        <div className="w-2/3 p-2">
          <div className="space-y-1">
            <div className="h-2 bg-gray-200 rounded w-3/4"></div>
            <div className="h-2 bg-gray-100 rounded w-1/2"></div>
          </div>
        </div>
        <div className="w-1/3 bg-slate-50 p-2">
          <div className="space-y-1">
            <div className="h-1.5 bg-gray-200 rounded"></div>
            <div className="h-1.5 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClassicPreview() {
  return (
    <div className="h-full bg-white p-3">
      <div className="text-center border-b pb-2 mb-2">
        <div className="h-3 bg-gray-800 rounded w-1/2 mx-auto mb-1"></div>
        <div className="h-1.5 bg-gray-300 rounded w-3/4 mx-auto"></div>
      </div>
      <div className="space-y-2">
        <div className="h-1.5 bg-gray-200 rounded"></div>
        <div className="h-1.5 bg-gray-200 rounded w-4/5"></div>
        <div className="h-1.5 bg-gray-200 rounded w-3/4"></div>
      </div>
    </div>
  );
}

function CreativePreview() {
  return (
    <div className="h-full bg-white">
      <div className="h-2 bg-gradient-to-r from-violet-500 to-indigo-500"></div>
      <div className="p-2">
        <div className="flex justify-between mb-2">
          <div className="h-3 bg-gray-800 rounded w-1/3"></div>
          <div className="space-y-1">
            <div className="h-1.5 bg-violet-200 rounded w-16"></div>
            <div className="h-1.5 bg-violet-200 rounded w-12"></div>
          </div>
        </div>
        <div className="h-6 bg-violet-50 rounded mb-2"></div>
        <div className="flex gap-2">
          <div className="flex-1 space-y-1">
            <div className="h-1.5 bg-gray-200 rounded"></div>
            <div className="h-1.5 bg-gray-200 rounded w-4/5"></div>
          </div>
          <div className="w-1/3 space-y-1">
            <div className="h-1.5 bg-violet-200 rounded"></div>
            <div className="h-1.5 bg-indigo-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// TemplatePreview for mini display
interface TemplatePreviewProps {
  template: TemplateType;
  className?: string;
}

export function TemplatePreview({ template, className }: TemplatePreviewProps) {
  const templateData = templates.find((t) => t.id === template);
  
  if (!templateData) return null;

  return (
    <div className={cn('aspect-[3/4] bg-muted rounded-md overflow-hidden border', className)}>
      {templateData.preview}
    </div>
  );
}
