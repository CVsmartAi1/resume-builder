'use client';

import { useState } from 'react';
import { useCV } from '@/context/cv-context';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface PersonalInfoFormProps {
  className?: string;
}

export function PersonalInfoForm({ className }: PersonalInfoFormProps) {
  const { cv, updatePersonalInfo } = useCV();
  const { personalInfo } = cv;

  const handleChange = (field: keyof typeof personalInfo, value: string) => {
    updatePersonalInfo({ [field]: value });
  };

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              value={personalInfo.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              placeholder="John"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              value={personalInfo.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={personalInfo.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="john.doe@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={personalInfo.phone || ''}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="profession">Profession / Job Title</Label>
          <Input
            id="profession"
            value={personalInfo.profession || ''}
            onChange={(e) => handleChange('profession', e.target.value)}
            placeholder="Software Engineer"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="summary">Professional Summary</Label>
          <Textarea
            id="summary"
            value={personalInfo.summary || ''}
            onChange={(e) => handleChange('summary', e.target.value)}
            placeholder="Brief overview of your professional background and key strengths..."
            rows={4}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={personalInfo.address || ''}
              onChange={(e) => handleChange('address', e.target.value)}
              placeholder="123 Main Street"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={personalInfo.city || ''}
              onChange={(e) => handleChange('city', e.target.value)}
              placeholder="New York"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              value={personalInfo.country || ''}
              onChange={(e) => handleChange('country', e.target.value)}
              placeholder="United States"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="postalCode">Postal Code</Label>
            <Input
              id="postalCode"
              value={personalInfo.postalCode || ''}
              onChange={(e) => handleChange('postalCode', e.target.value)}
              placeholder="10001"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input
              id="linkedin"
              value={personalInfo.linkedin || ''}
              onChange={(e) => handleChange('linkedin', e.target.value)}
              placeholder="linkedin.com/in/johndoe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              value={personalInfo.website || ''}
              onChange={(e) => handleChange('website', e.target.value)}
              placeholder="johndoe.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="github">GitHub</Label>
            <Input
              id="github"
              value={personalInfo.github || ''}
              onChange={(e) => handleChange('github', e.target.value)}
              placeholder="github.com/johndoe"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
