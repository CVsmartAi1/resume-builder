'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { CV, defaultCV, TemplateType } from '@/lib/cv-schema';
import { cvService, CVServiceError } from '@/lib/services/cv-service';
import { analytics } from '@/lib/analytics';

interface CVContextType {
  cv: CV;
  cvId: string | null;
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
  isLoading: boolean;
  isSaving: boolean;
  lastSaved: Date | null;
  hasUnsavedChanges: boolean;
  saveError: CVServiceError | null;
  saveCV: () => Promise<boolean>;
  resetCV: () => void;
  loadCV: (id: string) => Promise<boolean>;
  createNewCV: () => void;
}

const CVContext = createContext<CVContextType | undefined>(undefined);

// Generate unique ID for local items
const generateId = () => Math.random().toString(36).substring(2, 9);

// Storage key for draft
const STORAGE_KEY = 'cv-draft';

interface CVProviderProps {
  children: React.ReactNode;
  initialCV?: CV;
  cvId?: string;
}

export function CVProvider({ children, initialCV, cvId }: CVProviderProps) {
  const [cv, setCV] = useState<CV>(() => {
    // If initialCV is provided, use it (for editing existing CV)
    if (initialCV) return initialCV;
    
    // Try to load from localStorage on client side (for draft)
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
    return defaultCV;
  });
  
  const [currentCvId, setCurrentCvId] = useState<string | null>(cvId || null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [saveError, setSaveError] = useState<CVServiceError | null>(null);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load CV from database if cvId is provided
  useEffect(() => {
    if (cvId && cvId !== 'new') {
      loadCV(cvId);
    }
  }, [cvId]);

  // Auto-save to localStorage when CV changes (for draft only, not saved CVs)
  useEffect(() => {
    // Don't auto-save draft if we have a saved CV
    if (currentCvId) return;

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
  }, [cv, currentCvId]);

  const updateCV = useCallback((updates: Partial<CV>) => {
    setCV((prev) => ({ ...prev, ...updates }));
    setHasUnsavedChanges(true);
  }, []);

  const updatePersonalInfo = useCallback((updates: Partial<CV['personalInfo']>) => {
    setCV((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...updates },
    }));
    setHasUnsavedChanges(true);
  }, []);

  const addExperience = useCallback((experience: CV['experience'][0]) => {
    const newExperience = { ...experience, id: generateId() };
    setCV((prev) => ({
      ...prev,
      experience: [...prev.experience, newExperience],
    }));
    setHasUnsavedChanges(true);
  }, []);

  const updateExperience = useCallback((id: string, updates: Partial<CV['experience'][0]>) => {
    setCV((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, ...updates } : exp
      ),
    }));
    setHasUnsavedChanges(true);
  }, []);

  const removeExperience = useCallback((id: string) => {
    setCV((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
    setHasUnsavedChanges(true);
  }, []);

  const addEducation = useCallback((education: CV['education'][0]) => {
    const newEducation = { ...education, id: generateId() };
    setCV((prev) => ({
      ...prev,
      education: [...prev.education, newEducation],
    }));
    setHasUnsavedChanges(true);
  }, []);

  const updateEducation = useCallback((id: string, updates: Partial<CV['education'][0]>) => {
    setCV((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, ...updates } : edu
      ),
    }));
    setHasUnsavedChanges(true);
  }, []);

  const removeEducation = useCallback((id: string) => {
    setCV((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
    setHasUnsavedChanges(true);
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
    setHasUnsavedChanges(true);
  }, []);

  const removeSkill = useCallback((skill: string) => {
    setCV((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
    setHasUnsavedChanges(true);
  }, []);

  const setSkills = useCallback((skills: string[]) => {
    setCV((prev) => ({
      ...prev,
      skills: skills.map((s) => s.trim()).filter(Boolean),
    }));
    setHasUnsavedChanges(true);
  }, []);

  const setTemplate = useCallback((template: TemplateType) => {
    const prevTemplate = cv.template;
    setCV((prev) => ({ ...prev, template }));
    setHasUnsavedChanges(true);
    
    // Track template change
    if (prevTemplate !== template) {
      analytics.templateChanged(prevTemplate, template);
    }
  }, [cv.template]);

  /**
   * Load a CV from the database
   */
  const loadCV = useCallback(async (id: string): Promise<boolean> => {
    setIsLoading(true);
    setSaveError(null);
    
    try {
      const { data, error } = await cvService.getCV(id);
      
      if (error) {
        setSaveError(error);
        return false;
      }
      
      if (data) {
        setCV(data);
        setCurrentCvId(id);
        setHasUnsavedChanges(false);
        setLastSaved(new Date(data.updatedAt || Date.now()));
        return true;
      }
      
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Save the CV to the database
   */
  const saveCV = useCallback(async (): Promise<boolean> => {
    setIsSaving(true);
    setSaveError(null);
    
    try {
      if (currentCvId) {
        // Update existing CV
        const { data, error } = await cvService.updateCV(currentCvId, cv);
        
        if (error) {
          setSaveError(error);
          return false;
        }
        
        if (data) {
          setCV(data);
          setLastSaved(new Date());
          setHasUnsavedChanges(false);
          analytics.cvUpdated(currentCvId);
          return true;
        }
      } else {
        // Create new CV
        const { data, error } = await cvService.createCV(cv);
        
        if (error) {
          setSaveError(error);
          return false;
        }
        
        if (data) {
          setCV(data);
          setCurrentCvId(data.id || null);
          setLastSaved(new Date());
          setHasUnsavedChanges(false);
          
          // Clear localStorage draft after successful save
          if (typeof window !== 'undefined') {
            localStorage.removeItem(STORAGE_KEY);
          }
          
          // Track CV creation
          analytics.cvCreated(cv.template);
          
          return true;
        }
      }
      
      return false;
    } finally {
      setIsSaving(false);
    }
  }, [cv, currentCvId]);

  const resetCV = useCallback(() => {
    setCV(defaultCV);
    setCurrentCvId(null);
    setLastSaved(null);
    setHasUnsavedChanges(false);
    setSaveError(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const createNewCV = useCallback(() => {
    setCV(defaultCV);
    setCurrentCvId(null);
    setLastSaved(null);
    setHasUnsavedChanges(false);
    setSaveError(null);
  }, []);

  const value: CVContextType = {
    cv,
    cvId: currentCvId,
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
    isLoading,
    isSaving,
    lastSaved,
    hasUnsavedChanges,
    saveError,
    saveCV,
    resetCV,
    loadCV,
    createNewCV,
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
