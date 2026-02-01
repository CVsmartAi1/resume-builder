# Supabase Backend Setup Guide

This document explains how to set up the Supabase backend for the Resume Builder app.

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.local.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous/public key
- `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key (server-side only)

## Database Schema

Run the following SQL in your Supabase SQL editor to create the required tables:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  subscription_tier TEXT DEFAULT 'free',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- CVs table
CREATE TABLE IF NOT EXISTS cvs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  data JSONB NOT NULL,
  template TEXT DEFAULT 'modern',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_public BOOLEAN DEFAULT FALSE
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE cvs ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- CVs policies
CREATE POLICY "Users can view own CVs"
  ON cvs FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own CVs"
  ON cvs FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own CVs"
  ON cvs FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own CVs"
  ON cvs FOR DELETE
  USING (auth.uid() = user_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cvs_updated_at
  BEFORE UPDATE ON cvs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

## File Structure

```
src/
├── lib/
│   ├── supabase/
│   │   ├── client.ts      # Browser client
│   │   ├── server.ts      # Server-side client
│   │   ├── middleware.ts  # Auth middleware
│   │   └── admin.ts       # Admin operations
│   └── services/
│       └── cv-service.ts  # CV CRUD operations
├── types/
│   └── supabase.ts        # TypeScript types
└── middleware.ts          # Next.js middleware
```

## API Reference

### CV Service Methods

```typescript
import { cvService } from '@/lib/services/cv-service';

// Create a new CV
const { data, error } = await cvService.createCV(cv);

// Get all user's CVs
const { data, error } = await cvService.getUserCVs();

// Get a single CV
const { data, error } = await cvService.getCV(id);

// Update a CV
const { data, error } = await cvService.updateCV(id, cv);

// Delete a CV
const { success, error } = await cvService.deleteCV(id);

// Duplicate a CV
const { data, error } = await cvService.duplicateCV(id);
```

### CV Context

```typescript
import { useCV } from '@/context/cv-context';

function MyComponent() {
  const { 
    cv,                    // Current CV data
    cvId,                  // Current CV ID (null if unsaved)
    isLoading,             // Loading state for fetch
    isSaving,              // Saving state
    saveCV,                // Save CV function
    loadCV,                // Load CV by ID
    hasUnsavedChanges,     // Boolean
    saveError,             // Error object
    // ... other methods
  } = useCV();
  
  // Use the CV data and methods...
}
```

## Testing

### Test Cases

1. **Create CV**
   - Click "Create New Resume"
   - Fill in some data
   - Click Save
   - Verify CV appears in dashboard

2. **Read CVs**
   - Go to dashboard
   - Verify all CVs load
   - Verify loading skeleton appears

3. **Update CV**
   - Open an existing CV
   - Make changes
   - Click Save
   - Refresh page and verify changes persist

4. **Delete CV**
   - Go to dashboard
   - Click menu on a CV
   - Click Delete
   - Verify CV is removed

5. **Duplicate CV**
   - Go to dashboard
   - Click menu on a CV
   - Click Duplicate
   - Verify copy appears with "(Copy)" suffix

## Features Implemented

- ✅ Browser Supabase client
- ✅ Server-side Supabase client
- ✅ Auth middleware with route protection
- ✅ Admin client for server operations
- ✅ TypeScript database types
- ✅ CV Service with all CRUD operations
- ✅ Updated CV Context with Supabase integration
- ✅ Loading states and error handling
- ✅ Auto-save to localStorage (for drafts)
- ✅ Dashboard with real data fetching
- ✅ Resume Editor with save/load functionality
- ✅ Empty state and loading skeletons

## Security

- Row Level Security (RLS) enabled on all tables
- Users can only access their own data
- Service role key only used server-side
- Auth middleware protects routes
