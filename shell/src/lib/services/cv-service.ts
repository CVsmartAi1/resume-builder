import { supabase } from '@/lib/supabase/client';
import { CV } from '@/lib/cv-schema';
import { CVRecord, CVInsert, CVUpdate, Json } from '@/types/supabase';

export interface CVServiceError {
  message: string;
  code?: string;
}

// Transform CV to database format
function cvToDatabase(cv: CV, userId: string): CVInsert {
  return {
    user_id: userId,
    title: cv.title,
    data: cv as unknown as Json,
    template: cv.template,
    is_public: false,
  };
}

// Transform database record to CV
function databaseToCV(record: CVRecord): CV {
  const data = record.data as unknown as Partial<CV>;
  return {
    ...data,
    id: record.id,
    title: record.title,
    template: data.template || 'modern',
    createdAt: record.created_at,
    updatedAt: record.updated_at,
  } as CV;
}

export const cvService = {
  /**
   * Create a new CV
   */
  async createCV(cv: CV): Promise<{ data: CV | null; error: CVServiceError | null }> {
    try {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      
      if (userError || !userData.user) {
        return {
          data: null,
          error: { message: 'User not authenticated', code: 'AUTH_ERROR' },
        };
      }

      const cvData = cvToDatabase(cv, userData.user.id);

      const { data, error } = await supabase
        .from('cvs')
        .insert(cvData)
        .select()
        .single();

      if (error) {
        console.error('Error creating CV:', error);
        return {
          data: null,
          error: { message: error.message, code: error.code },
        };
      }

      return { data: databaseToCV(data), error: null };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error occurred';
      return { data: null, error: { message } };
    }
  },

  /**
   * Get a single CV by ID
   */
  async getCV(id: string): Promise<{ data: CV | null; error: CVServiceError | null }> {
    try {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      
      if (userError || !userData.user) {
        return {
          data: null,
          error: { message: 'User not authenticated', code: 'AUTH_ERROR' },
        };
      }

      const { data, error } = await supabase
        .from('cvs')
        .select('*')
        .eq('id', id)
        .eq('user_id', userData.user.id)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return {
            data: null,
            error: { message: 'CV not found', code: 'NOT_FOUND' },
          };
        }
        console.error('Error fetching CV:', error);
        return {
          data: null,
          error: { message: error.message, code: error.code },
        };
      }

      return { data: databaseToCV(data), error: null };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error occurred';
      return { data: null, error: { message } };
    }
  },

  /**
   * Get all CVs for the current user
   */
  async getUserCVs(): Promise<{ data: CV[]; error: CVServiceError | null }> {
    try {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      
      if (userError || !userData.user) {
        return {
          data: [],
          error: { message: 'User not authenticated', code: 'AUTH_ERROR' },
        };
      }

      const { data, error } = await supabase
        .from('cvs')
        .select('*')
        .eq('user_id', userData.user.id)
        .order('updated_at', { ascending: false });

      if (error) {
        console.error('Error fetching CVs:', error);
        return {
          data: [],
          error: { message: error.message, code: error.code },
        };
      }

      return { data: data.map(databaseToCV), error: null };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error occurred';
      return { data: [], error: { message } };
    }
  },

  /**
   * Update an existing CV
   */
  async updateCV(
    id: string,
    cv: CV
  ): Promise<{ data: CV | null; error: CVServiceError | null }> {
    try {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      
      if (userError || !userData.user) {
        return {
          data: null,
          error: { message: 'User not authenticated', code: 'AUTH_ERROR' },
        };
      }

      const updateData: CVUpdate = {
        title: cv.title,
        data: cv as unknown as Json,
        template: cv.template,
        updated_at: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from('cvs')
        .update(updateData)
        .eq('id', id)
        .eq('user_id', userData.user.id)
        .select()
        .single();

      if (error) {
        console.error('Error updating CV:', error);
        return {
          data: null,
          error: { message: error.message, code: error.code },
        };
      }

      return { data: databaseToCV(data), error: null };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error occurred';
      return { data: null, error: { message } };
    }
  },

  /**
   * Delete a CV
   */
  async deleteCV(id: string): Promise<{ success: boolean; error: CVServiceError | null }> {
    try {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      
      if (userError || !userData.user) {
        return {
          success: false,
          error: { message: 'User not authenticated', code: 'AUTH_ERROR' },
        };
      }

      const { error } = await supabase
        .from('cvs')
        .delete()
        .eq('id', id)
        .eq('user_id', userData.user.id);

      if (error) {
        console.error('Error deleting CV:', error);
        return {
          success: false,
          error: { message: error.message, code: error.code },
        };
      }

      return { success: true, error: null };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error occurred';
      return { success: false, error: { message } };
    }
  },

  /**
   * Duplicate a CV
   */
  async duplicateCV(id: string): Promise<{ data: CV | null; error: CVServiceError | null }> {
    try {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      
      if (userError || !userData.user) {
        return {
          data: null,
          error: { message: 'User not authenticated', code: 'AUTH_ERROR' },
        };
      }

      // First, get the original CV
      const { data: originalCV, error: fetchError } = await supabase
        .from('cvs')
        .select('*')
        .eq('id', id)
        .eq('user_id', userData.user.id)
        .single();

      if (fetchError || !originalCV) {
        return {
          data: null,
          error: fetchError
            ? { message: fetchError.message, code: fetchError.code }
            : { message: 'CV not found', code: 'NOT_FOUND' },
        };
      }

      // Create a new CV with the same data but new title
      const duplicatedData: CVInsert = {
        user_id: userData.user.id,
        title: `${originalCV.title} (Copy)`,
        data: originalCV.data,
        template: originalCV.template,
        is_public: false,
      };

      const { data, error } = await supabase
        .from('cvs')
        .insert(duplicatedData)
        .select()
        .single();

      if (error) {
        console.error('Error duplicating CV:', error);
        return {
          data: null,
          error: { message: error.message, code: error.code },
        };
      }

      return { data: databaseToCV(data), error: null };
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error occurred';
      return { data: null, error: { message } };
    }
  },
};
