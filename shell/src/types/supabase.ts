export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      cvs: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          data: Json;
          template: string;
          created_at: string;
          updated_at: string;
          is_public: boolean;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          data: Json;
          template?: string;
          created_at?: string;
          updated_at?: string;
          is_public?: boolean;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          data?: Json;
          template?: string;
          created_at?: string;
          updated_at?: string;
          is_public?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: 'cvs_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          avatar_url: string | null;
          subscription_tier: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          avatar_url?: string | null;
          subscription_tier?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          subscription_tier?: string;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

// Helper types for easier usage
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];
export type Insertable<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert'];
export type Updatable<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update'];

// Specific table types
export type CVRecord = Tables<'cvs'>;
export type CVInsert = Insertable<'cvs'>;
export type CVUpdate = Updatable<'cvs'>;

export type ProfileRecord = Tables<'profiles'>;
export type ProfileInsert = Insertable<'profiles'>;
export type ProfileUpdate = Updatable<'profiles'>;
