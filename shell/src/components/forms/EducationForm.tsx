'use client';

import { useState } from 'react';
import { useCV } from '@/context/cv-context';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Education } from '@/lib/cv-schema';
import { cn } from '@/lib/utils';
import { GraduationCap, Plus, Pencil, Trash2, X, Check } from 'lucide-react';

interface EducationFormProps {
  className?: string;
}

const emptyEducation: Omit<Education, 'id'> = {
  school: '',
  degree: '',
  fieldOfStudy: '',
  location: '',
  startDate: '',
  endDate: '',
  current: false,
  description: '',
  gpa: '',
};

export function EducationForm({ className }: EducationFormProps) {
  const { cv, addEducation, updateEducation, removeEducation } = useCV();
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<Education, 'id'>>(emptyEducation);

  const resetForm = () => {
    setFormData(emptyEducation);
    setIsEditing(false);
    setEditingId(null);
  };

  const handleAdd = () => {
    setIsEditing(true);
    setFormData(emptyEducation);
  };

  const handleEdit = (education: Education) => {
    setIsEditing(true);
    setEditingId(education.id || null);
    setFormData({
      school: education.school,
      degree: education.degree,
      fieldOfStudy: education.fieldOfStudy || '',
      location: education.location || '',
      startDate: education.startDate,
      endDate: education.endDate || '',
      current: education.current || false,
      description: education.description || '',
      gpa: education.gpa || '',
    });
  };

  const handleSave = () => {
    if (!formData.school.trim() || !formData.degree.trim()) return;

    if (editingId) {
      updateEducation(editingId, formData);
    } else {
      addEducation(formData);
    }
    resetForm();
  };

  const handleDelete = (id: string) => {
    removeEducation(id);
  };

  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          Education
        </CardTitle>
        {!isEditing && (
          <Button onClick={handleAdd} size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="school">School / Institution *</Label>
              <Input
                id="school"
                value={formData.school}
                onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                placeholder="University Name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="degree">Degree *</Label>
                <Input
                  id="degree"
                  value={formData.degree}
                  onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                  placeholder="Bachelor's, Master's, PhD..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fieldOfStudy">Field of Study</Label>
                <Input
                  id="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={(e) => setFormData({ ...formData, fieldOfStudy: e.target.value })}
                  placeholder="Computer Science"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="City, Country"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gpa">GPA (Optional)</Label>
                <Input
                  id="gpa"
                  value={formData.gpa}
                  onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                  placeholder="3.8 / 4.0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date *</Label>
                <Input
                  id="startDate"
                  type="month"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  type="month"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  disabled={formData.current}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="current"
                checked={formData.current}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, current: checked as boolean })
                }
              />
              <Label htmlFor="current" className="cursor-pointer">
                I am currently studying here
              </Label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Relevant coursework, achievements, activities..."
                rows={4}
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={resetForm}>
                <X className="h-4 w-4 mr-1" />
                Cancel
              </Button>
              <Button onClick={handleSave}>
                <Check className="h-4 w-4 mr-1" />
                Save
              </Button>
            </div>
          </div>
        ) : cv.education.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <GraduationCap className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>No education added yet.</p>
            <p className="text-sm">Click "Add" to get started.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {cv.education.map((edu) => (
              <div
                key={edu.id}
                className="flex items-start justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold truncate">{edu.school}</h4>
                  <p className="text-sm text-muted-foreground">
                    {edu.degree}
                    {edu.fieldOfStudy && ` in ${edu.fieldOfStudy}`}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                    {edu.location && ` • ${edu.location}`}
                    {edu.gpa && ` • GPA: ${edu.gpa}`}
                  </p>
                </div>
                <div className="flex gap-1 ml-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(edu)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => edu.id && handleDelete(edu.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
