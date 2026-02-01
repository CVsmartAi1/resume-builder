import { z } from 'zod';

// Personal Info Schema
export const personalInfoSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  postalCode: z.string().optional(),
  summary: z.string().optional(),
  profession: z.string().optional(),
  linkedin: z.string().optional(),
  website: z.string().optional(),
  github: z.string().optional(),
});

// Experience Schema
export const experienceSchema = z.object({
  id: z.string().optional(),
  company: z.string().min(1, 'Company name is required'),
  position: z.string().min(1, 'Position is required'),
  location: z.string().optional(),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  description: z.string().optional(),
});

// Education Schema
export const educationSchema = z.object({
  id: z.string().optional(),
  school: z.string().min(1, 'School name is required'),
  degree: z.string().min(1, 'Degree is required'),
  fieldOfStudy: z.string().optional(),
  location: z.string().optional(),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().optional(),
  current: z.boolean().default(false),
  description: z.string().optional(),
  gpa: z.string().optional(),
});

// Skills Schema
export const skillsSchema = z.object({
  skills: z.array(z.string()).default([]),
});

// Template Type
export const templateTypeSchema = z.enum(['modern', 'classic', 'creative']);

// Full CV Schema
export const cvSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required'),
  personalInfo: personalInfoSchema,
  experience: z.array(experienceSchema).default([]),
  education: z.array(educationSchema).default([]),
  skills: z.array(z.string()).default([]),
  template: templateTypeSchema.default('modern'),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

// Types
export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Education = z.infer<typeof educationSchema>;
export type TemplateType = z.infer<typeof templateTypeSchema>;
export type CV = z.infer<typeof cvSchema>;

// Default values
export const defaultPersonalInfo: PersonalInfo = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  country: '',
  postalCode: '',
  summary: '',
  profession: '',
  linkedin: '',
  website: '',
  github: '',
};

export const defaultCV: CV = {
  title: 'Untitled Resume',
  personalInfo: defaultPersonalInfo,
  experience: [],
  education: [],
  skills: [],
  template: 'modern',
};
