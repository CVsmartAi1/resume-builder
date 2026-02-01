'use client';

import { useState, useRef, KeyboardEvent } from 'react';
import { useCV } from '@/context/cv-context';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Lightbulb, X, Sparkles } from 'lucide-react';

interface SkillsFormProps {
  className?: string;
}

const commonSkills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'Java',
  'SQL',
  'Git',
  'AWS',
  'Docker',
  'Project Management',
  'Leadership',
  'Communication',
  'Problem Solving',
  'Agile',
  'Data Analysis',
  'Marketing',
  'Sales',
  'Customer Service',
  'Microsoft Office',
  'Photoshop',
  'Figma',
  'UI/UX Design',
  'SEO',
  'Content Writing',
];

export function SkillsForm({ className }: SkillsFormProps) {
  const { cv, addSkill, removeSkill } = useCV();
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      if (inputValue.trim()) {
        addSkill(inputValue);
        setInputValue('');
      }
    } else if (e.key === 'Backspace' && !inputValue && cv.skills.length > 0) {
      removeSkill(cv.skills[cv.skills.length - 1]);
    }
  };

  const handleAddSkill = () => {
    if (inputValue.trim()) {
      addSkill(inputValue);
      setInputValue('');
      inputRef.current?.focus();
    }
  };

  const handleAddSuggestion = (skill: string) => {
    addSkill(skill);
  };

  const filteredSuggestions = commonSkills.filter(
    (skill) =>
      !cv.skills.includes(skill) &&
      skill.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          Skills
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="skill-input">Add Skills</Label>
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              id="skill-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Type a skill and press Enter (e.g., JavaScript)"
              className="flex-1"
            />
            <Button onClick={handleAddSkill} type="button">
              Add
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Press Enter or comma to add a skill
          </p>
        </div>

        {showSuggestions && filteredSuggestions.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4" />
              <span>Suggestions</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filteredSuggestions.slice(0, 15).map((skill) => (
                <Button
                  key={skill}
                  variant="outline"
                  size="sm"
                  onClick={() => handleAddSuggestion(skill)}
                  className="text-xs"
                >
                  + {skill}
                </Button>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label>Your Skills ({cv.skills.length})</Label>
          {cv.skills.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground border-2 border-dashed border-muted rounded-lg">
              <Lightbulb className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No skills added yet.</p>
              <p className="text-sm">Add skills relevant to your target job.</p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {cv.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm cursor-pointer hover:bg-destructive/10 group"
                >
                  {skill}
                  <button
                    onClick={() => removeSkill(skill)}
                    className="ml-2 opacity-50 group-hover:opacity-100 transition-opacity"
                    type="button"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </div>

        {cv.skills.length > 0 && (
          <div className="flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => cv.skills.forEach(removeSkill)}
              className="text-destructive hover:text-destructive"
            >
              Clear All
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
