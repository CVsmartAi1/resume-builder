'use client';

import { useState } from 'react';
import { useCV } from '@/context/cv-context';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Experience } from '@/lib/cv-schema';
import { cn } from '@/lib/utils';
import { Briefcase, Plus, Pencil, Trash2, X, Check } from 'lucide-react';

interface ExperienceFormProps {
  className?: string;
}

const emptyExperience: Omit<Experience, 'id'> = {
  company: '',
  position: '',
  location: '',
  startDate: '',
  endDate: '',
  current: false,
  description: '',
};

export function ExperienceForm({ className }: ExperienceFormProps) {
  const { cv, addExperience, updateExperience, removeExperience } = useCV();
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<Experience, 'id'>>(emptyExperience);

  const resetForm = () => {
    setFormData(emptyExperience);
    setIsEditing(false);
    setEditingId(null);
  };

  const handleAdd = () => {
    setIsEditing(true);
    setFormData(emptyExperience);
  };

  const handleEdit = (experience: Experience) => {
    setIsEditing(true);
    setEditingId(experience.id || null);
    setFormData({
      company: experience.company,
      position: experience.position,
      location: experience.location || '',
      startDate: experience.startDate,
      endDate: experience.endDate || '',
      current: experience.current || false,
      description: experience.description || '',
    });
  };

  const handleSave = () => {
    if (!formData.company.trim() || !formData.position.trim()) return;

    if (editingId) {
      updateExperience(editingId, formData);
    } else {
      addExperience(formData);
    }
    resetForm();
  };

  const handleDelete = (id: string) => {
    removeExperience(id);
  };

  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="h-5 w-5" />
          Work Experience
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company Name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position *</Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  placeholder="Job Title"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="City, Country"
              />
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
                I currently work here
              </Label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe your responsibilities and achievements..."
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
        ) : cv.experience.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Briefcase className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>No work experience added yet.</p>
            <p className="text-sm">Click "Add" to get started.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {cv.experience.map((exp) => (
              <div
                key={exp.id}
                className="flex items-start justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold truncate">{exp.position}</h4>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    {exp.location && ` • ${exp.location}`}
                  </p>
                </div>
                <div className="flex gap-1 ml-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(exp)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => exp.id && handleDelete(exp.id)}
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
