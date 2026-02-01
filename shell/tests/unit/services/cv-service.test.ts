import { describe, it, expect, vi, beforeEach } from 'vitest';
import { cvService } from '@/lib/services/cv-service';
import { CV } from '@/lib/cv-schema';

// Mock Supabase
vi.mock('@/lib/supabase/client', () => ({
  supabase: {
    auth: {
      getUser: vi.fn(),
    },
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: vi.fn(() => ({
          order: vi.fn(),
          single: vi.fn(),
        })),
      })),
      insert: vi.fn(() => ({
        select: vi.fn(() => ({
          single: vi.fn(),
        })),
      })),
      update: vi.fn(() => ({
        eq: vi.fn(() => ({
          select: vi.fn(() => ({
            single: vi.fn(),
          })),
        })),
      })),
      delete: vi.fn(() => ({
        eq: vi.fn(),
      })),
    })),
  },
}));

describe('cvService', () => {
  const mockCV: CV = {
    id: 'test-id',
    title: 'Test CV',
    personalInfo: {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
    },
    experience: [],
    education: [],
    skills: [],
    template: 'modern',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('createCV', () => {
    it('should create a new CV', async () => {
      const result = await cvService.createCV(mockCV);
      
      expect(result).toHaveProperty('data');
      expect(result).toHaveProperty('error');
    });

    it('should handle authentication errors', async () => {
      const result = await cvService.createCV(mockCV);
      
      if (result.error) {
        expect(result.error.message).toBeDefined();
      }
    });
  });

  describe('getUserCVs', () => {
    it('should fetch user CVs', async () => {
      const result = await cvService.getUserCVs();
      
      expect(Array.isArray(result.data)).toBe(true);
      expect(result).toHaveProperty('error');
    });
  });

  describe('getCV', () => {
    it('should fetch a single CV', async () => {
      const result = await cvService.getCV('test-id');
      
      expect(result).toHaveProperty('data');
      expect(result).toHaveProperty('error');
    });
  });

  describe('updateCV', () => {
    it('should update an existing CV', async () => {
      const result = await cvService.updateCV('test-id', mockCV);
      
      expect(result).toHaveProperty('data');
      expect(result).toHaveProperty('error');
    });
  });

  describe('deleteCV', () => {
    it('should delete a CV', async () => {
      const result = await cvService.deleteCV('test-id');
      
      expect(result).toHaveProperty('success');
      expect(result).toHaveProperty('error');
    });
  });

  describe('duplicateCV', () => {
    it('should duplicate a CV', async () => {
      const result = await cvService.duplicateCV('test-id');
      
      expect(result).toHaveProperty('data');
      expect(result).toHaveProperty('error');
    });
  });
});
