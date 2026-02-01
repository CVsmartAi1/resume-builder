'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { CV, defaultCV, TemplateType } from '@/lib/cv-schema';

interface CVContextType {
  cv: CV;
  updateCV: (updates: Partial<CV>) => void;
  updatePersonalInfo: (updates: Partial<CV['personalInfo']>) => void;
  addExperience: (experience: CV['experience'][0]) => void;
  updateExperience: (id: string, experience: Partial<CV['experience'][0]>) => void;
  removeExperience: (id: string) => void;
  addEducation: (education: CV['education'][0]) => void;
  updateEducation: (id: string, education: Partial<CV['education'][0]>) => void;
  removeEducation: (id: string) => void;
  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
  setSkills: (skills: string[]) => void;
  setTemplate: (template: TemplateType) => void;
  isSaving: boolean;
  lastSaved: Date | null;
  hasUnsavedChanges: boolean;
  saveCV: () => Promise<void>;
  resetCV: () => void;
}

const CVContext = createContext<CVContextType | undefined>(undefined);

// Generate unique ID
const generateId = () => Math.random().toString(36).substring(2, 9);

// Storage key
const STORAGE_KEY = 'cv-draft';

interface CVProviderProps {
  children: React.ReactNode;
  initialCV?: CV;
  cvId?: string;
}

export function CVProvider({ children, initialCV }: CVProviderProps) {
  const [cv, setCV] = useState<CV>(() => {
    // Try to load from localStorage on client side
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return { ...defaultCV, ...JSON.parse(saved) };
        } catch (e) {
          console.error('Failed to parse saved CV:', e);
        }
      }
    }
    return initialCV || defaultCV;
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-save to localStorage when CV changes
  useEffect(() => {
    setHasUnsavedChanges(true);
    
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cv));
        setLastSaved(new Date());
        setHasUnsavedChanges(false);
      }
    }, 1000);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [cv]);

  const updateCV = useCallback((updates: Partial<CV>) => {
    setCV((prev) => ({ ...prev, ...updates }));
  }, []);

  const updatePersonalInfo = useCallback((updates: Partial<CV['personalInfo']>) => {
    setCV((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...updates },
    }));
  }, []);

  const addExperience = useCallback((experience: CV['experience'][0]) => {
    const newExperience = { ...experience, id: generateId() };
    setCV((prev) => ({
      ...prev,
      experience: [...prev.experience, newExperience],
    }));
  }, []);

  const updateExperience = useCallback((id: string, updates: Partial<CV['experience'][0]>) => {
    setCV((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, ...updates } : exp
      ),
    }));
  }, []);

  const removeExperience = useCallback((id: string) => {
    setCV((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  }, []);

  const addEducation = useCallback((education: CV['education'][0]) => {
    const newEducation = { ...education, id: generateId() };
    setCV((prev) => ({
      ...prev,
      education: [...prev.education, newEducation],
    }));
  }, []);

  const updateEducation = useCallback((id: string, updates: Partial<CV['education'][0]>) => {
    setCV((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, ...updates } : edu
      ),
    }));
  }, []);

  const removeEducation = useCallback((id: string) => {
    setCV((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  }, []);

  const addSkill = useCallback((skill: string) => {
    const trimmedSkill = skill.trim();
    if (!trimmedSkill) return;
    
    setCV((prev) => {
      if (prev.skills.includes(trimmedSkill)) return prev;
      return {
        ...prev,
        skills: [...prev.skills, trimmedSkill],
      };
    });
  }, []);

  const removeSkill = useCallback((skill: string) => {
    setCV((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  }, []);

  const setSkills = useCallback((skills: string[]) => {
    setCV((prev) => ({
      ...prev,
      skills: skills.map((s) => s.trim()).filter(Boolean),
    }));
  }, []);

  const setTemplate = useCallback((template: TemplateType) => {
    setCV((prev) => ({ ...prev, template }));
  }, []);

  const saveCV = useCallback(async () => {
    setIsSaving(true);
    try {
      // Simulate API call - replace with actual Supabase call
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cv));
      }
      
      setLastSaved(new Date());
      setHasUnsavedChanges(false);
    } finally {
      setIsSaving(false);
    }
  }, [cv]);

  const resetCV = useCallback(() => {
    setCV(defaultCV);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const value: CVContextType = {
    cv,
    updateCV,
    updatePersonalInfo,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    addSkill,
    removeSkill,
    setSkills,
    setTemplate,
    isSaving,
    lastSaved,
    hasUnsavedChanges,
    saveCV,
    resetCV,
  };

  return <CVContext.Provider value={value}>{children}</CVContext.Provider>;
}

export function useCV() {
  const context = useContext(CVContext);
  if (context === undefined) {
    throw new Error('useCV must be used within a CVProvider');
  }
  return context;
}
