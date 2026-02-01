'use client';

import { useCV } from '@/context/cv-context';
import { PersonalInfoForm } from '@/components/forms/PersonalInfoForm';
import { ExperienceForm } from '@/components/forms/ExperienceForm';
import { EducationForm } from '@/components/forms/EducationForm';
import { SkillsForm } from '@/components/forms/SkillsForm';
import { ResumePreview } from '@/components/resume/ResumePreview';
import { TemplateSelector } from '@/components/resume/TemplateSelector';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Save, Eye, FileText } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export function ResumeEditor() {
  const { cv, updateCV, isSaving, lastSaved, saveCV, hasUnsavedChanges } = useCV();
  const [showPreview, setShowPreview] = useState(false);

  const handleDownloadPDF = () => {
    // PDF download will be implemented
    alert('PDF download coming soon!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Resume Builder
            </Link>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="hidden sm:flex flex-col">
              <Label className="text-xs text-gray-500">Resume Title</Label>
              <Input
                value={cv.title}
                onChange={(e) => updateCV({ title: e.target.value })}
                className="h-7 text-sm border-0 p-0 focus-visible:ring-0 w-48"
                placeholder="Untitled Resume"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {hasUnsavedChanges && (
              <span className="text-xs text-amber-600 hidden sm:inline">
                Unsaved changes
              </span>
            )}
            {lastSaved && (
              <span className="text-xs text-gray-500 hidden md:inline">
                Saved {lastSaved.toLocaleTimeString()}
              </span>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowPreview(!showPreview)}
              className="lg:hidden"
            >
              <Eye className="mr-2 h-4 w-4" />
              {showPreview ? 'Edit' : 'Preview'}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadPDF}
            >
              <Download className="mr-2 h-4 w-4" />
              PDF
            </Button>
            
            <Button size="sm" onClick={saveCV} disabled={isSaving}>
              <Save className="mr-2 h-4 w-4" />
              {isSaving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          <div className={`${showPreview ? 'hidden lg:block' : 'block'}`}>
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="mt-6">
                <PersonalInfoForm />
              </TabsContent>
              
              <TabsContent value="experience" className="mt-6">
                <ExperienceForm />
              </TabsContent>
              
              <TabsContent value="education" className="mt-6">
                <EducationForm />
              </TabsContent>
              
              <TabsContent value="skills" className="mt-6">
                <SkillsForm />
              </TabsContent>
            </Tabs>

            {/* Template Selector */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Choose Template</h3>
              <TemplateSelector />
            </div>
          </div>

          {/* Preview Panel */}
          <div className={`${showPreview ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Preview</h3>
                <span className="text-sm text-gray-500">A4 Format</span>
              </div>
              <ResumePreview />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
