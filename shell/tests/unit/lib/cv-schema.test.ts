import { describe, it, expect } from 'vitest';
import { 
  personalInfoSchema, 
  experienceSchema, 
  educationSchema,
  cvSchema 
} from '@/lib/cv-schema';

describe('CV Schema Validation', () => {
  describe('personalInfoSchema', () => {
    it('should validate valid personal info', () => {
      const validData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
      };
      
      const result = personalInfoSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject empty first name', () => {
      const invalidData = {
        firstName: '',
        lastName: 'Doe',
        email: 'john@example.com',
      };
      
      const result = personalInfoSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject invalid email', () => {
      const invalidData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'invalid-email',
      };
      
      const result = personalInfoSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('experienceSchema', () => {
    it('should validate valid experience', () => {
      const validData = {
        company: 'Tech Corp',
        position: 'Developer',
        startDate: '2020-01-01',
      };
      
      const result = experienceSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject empty company', () => {
      const invalidData = {
        company: '',
        position: 'Developer',
        startDate: '2020-01-01',
      };
      
      const result = experienceSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('educationSchema', () => {
    it('should validate valid education', () => {
      const validData = {
        school: 'University',
        degree: 'Bachelor',
        startDate: '2015-01-01',
      };
      
      const result = educationSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });
  });

  describe('cvSchema', () => {
    it('should validate complete CV', () => {
      const validCV = {
        title: 'My CV',
        personalInfo: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
        },
        experience: [],
        education: [],
        skills: [],
        template: 'modern',
      };
      
      const result = cvSchema.safeParse(validCV);
      expect(result.success).toBe(true);
    });

    it('should reject CV without title', () => {
      const invalidCV = {
        personalInfo: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
        },
        experience: [],
        education: [],
        skills: [],
        template: 'modern',
      };
      
      const result = cvSchema.safeParse(invalidCV);
      expect(result.success).toBe(false);
    });
  });
});
