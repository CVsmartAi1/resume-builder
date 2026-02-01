'use client';

import { useState, useEffect, useCallback } from 'react';
import { CV, TemplateType } from '@/lib/cv-schema';
import { cvService } from '@/lib/services/cv-service';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import {
  Plus,
  MoreVertical,
  Pencil,
  Copy,
  Trash2,
  Download,
  FileText,
  Clock,
  Layout,
  BookOpen,
  Palette,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';
import Link from 'next/link';
import { DownloadButton } from '@/lib/pdf-generator';

interface CVsListProps {
  className?: string;
}

export function CVsList({ className }: CVsListProps) {
  const [cvs, setCvs] = useState<CV[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [duplicatingId, setDuplicatingId] = useState<string | null>(null);

  // Fetch CVs on mount
  const fetchCVs = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const { data, error: fetchError } = await cvService.getUserCVs();
      
      if (fetchError) {
        setError(fetchError.message);
        return;
      }
      
      setCvs(data);
    } catch (err) {
      setError('Failed to load resumes. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCVs();
  }, [fetchCVs]);

  const handleDuplicate = async (cv: CV) => {
    if (!cv.id || duplicatingId) return;
    
    setDuplicatingId(cv.id);
    try {
      const { data, error: duplicateError } = await cvService.duplicateCV(cv.id);
      
      if (duplicateError) {
        setError(duplicateError.message);
        return;
      }
      
      if (data) {
        setCvs((prev) => [data, ...prev]);
      }
    } finally {
      setDuplicatingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      const { success, error: deleteError } = await cvService.deleteCV(id);
      
      if (!success) {
        setError(deleteError?.message || 'Failed to delete resume');
        return;
      }
      
      setCvs((prev) => prev.filter((cv) => cv.id !== id));
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getTemplateIcon = (template: TemplateType) => {
    switch (template) {
      case 'classic':
        return <BookOpen className="h-3.5 w-3.5" />;
      case 'creative':
        return <Palette className="h-3.5 w-3.5" />;
      case 'modern':
      default:
        return <Layout className="h-3.5 w-3.5" />;
    }
  };

  const getTemplateLabel = (template: TemplateType) => {
    return template.charAt(0).toUpperCase() + template.slice(1);
  };

  // Loading skeletons
  if (isLoading) {
    return (
      <div className={cn('space-y-6', className)}>
        <div className="flex items-center justify-between">
          <div>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-10 w-32" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="aspect-[4/3] w-full" />
              <CardContent className="p-4">
                <Skeleton className="h-5 w-3/4 mb-2" />
                <Skeleton className="h-4 w-24 mb-4" />
                <Skeleton className="h-3 w-32" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <Card className={cn('p-12 text-center', className)}>
        <div className="mx-auto w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="h-12 w-12 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Failed to load resumes</h2>
        <p className="text-muted-foreground max-w-sm mx-auto mb-6">
          {error}
        </p>
        <Button onClick={fetchCVs} variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          Try Again
        </Button>
      </Card>
    );
  }

  // Empty state
  if (cvs.length === 0) {
    return <EmptyState className={className} />;
  }

  return (
    <div className={cn('space-y-6', className)}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">My Resumes</h2>
          <p className="text-muted-foreground">{getResumeCountText(cvs.length)}</p>
        </div>
        <Link href="/cvs/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cvs.map((cv) => (
          <Card
            key={cv.id}
            className={cn(
              'group overflow-hidden transition-all hover:shadow-md',
              deletingId === cv.id && 'opacity-50'
            )}
          >
            {/* Preview Thumbnail */}
            <div className="aspect-[4/3] bg-muted relative overflow-hidden">
              <TemplateThumbnail template={cv.template} />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Link href={`/cvs/${cv.id}`}>
                  <Button size="sm" variant="secondary">
                    <Pencil className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </Link>
              </div>
            </div>

            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="min-w-0">
                  <Link href={`/cvs/${cv.id}`} className="hover:underline">
                    <h3 className="font-semibold truncate">{cv.title}</h3>
                  </Link>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                      <span className="flex items-center gap-1">
                        {getTemplateIcon(cv.template)}
                        {getTemplateLabel(cv.template)}
                      </span>
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                    <Clock className="h-3 w-3" />
                    <span>Updated {formatDate(cv.updatedAt)}</span>
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <Link href={`/cvs/${cv.id}`}>
                      <DropdownMenuItem>
                        <Pencil className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem 
                      onClick={() => handleDuplicate(cv)}
                      disabled={duplicatingId === cv.id}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      {duplicatingId === cv.id ? 'Duplicating...' : 'Duplicate'}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <div className="flex items-center cursor-pointer">
                        <Download className="h-4 w-4 mr-2" />
                        <span className="flex-1">Download PDF</span>
                        <DownloadButton
                          cv={cv}
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 ml-2"
                        />
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onClick={() => cv.id && handleDelete(cv.id)}
                      disabled={deletingId === cv.id}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      {deletingId === cv.id ? 'Deleting...' : 'Delete'}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Empty State Component
function EmptyState({ className }: { className?: string }) {
  return (
    <Card className={cn('p-12 text-center', className)}>
      <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
        <FileText className="h-12 w-12 text-muted-foreground" />
      </div>
      <h2 className="text-2xl font-bold mb-2">No resumes yet</h2>
      <p className="text-muted-foreground max-w-sm mx-auto mb-6">
        Create your first professional resume in minutes. Choose from multiple templates and customize to your needs.
      </p>
      <Link href="/cvs/new">
        <Button size="lg">
          <Plus className="h-5 w-5 mr-2" />
          Create Your First Resume
        </Button>
      </Link>
    </Card>
  );
}

// Template Thumbnail Component
function TemplateThumbnail({ template }: { template: TemplateType }) {
  switch (template) {
    case 'classic':
      return (
        <div className="w-full h-full bg-white p-4 flex flex-col items-center">
          <div className="w-3/4 h-3 bg-gray-800 rounded mb-2"></div>
          <div className="w-1/2 h-2 bg-gray-400 rounded mb-4"></div>
          <div className="w-full space-y-2">
            <div className="h-2 bg-gray-200 rounded"></div>
            <div className="h-2 bg-gray-200 rounded w-4/5"></div>
            <div className="h-2 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      );
    case 'creative':
      return (
        <div className="w-full h-full bg-white p-4">
          <div className="h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded mb-2"></div>
          <div className="flex justify-between mb-3">
            <div className="w-1/3 h-3 bg-gray-800 rounded"></div>
            <div className="w-1/4 h-2 bg-violet-300 rounded"></div>
          </div>
          <div className="h-8 bg-violet-50 rounded mb-2"></div>
          <div className="flex gap-2">
            <div className="flex-1 space-y-1">
              <div className="h-1.5 bg-gray-200 rounded"></div>
              <div className="h-1.5 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="w-1/3 space-y-1">
              <div className="h-1.5 bg-violet-200 rounded"></div>
              <div className="h-1.5 bg-indigo-200 rounded"></div>
            </div>
          </div>
        </div>
      );
    case 'modern':
    default:
      return (
        <div className="w-full h-full bg-white flex">
          <div className="w-2/3 p-4">
            <div className="space-y-1">
              <div className="h-2 bg-gray-300 rounded w-3/4"></div>
              <div className="h-2 bg-gray-200 rounded w-1/2"></div>
              <div className="h-2 bg-gray-200 rounded w-2/3 mt-2"></div>
            </div>
          </div>
          <div className="w-1/3 bg-slate-100 p-4">
            <div className="space-y-1">
              <div className="h-1.5 bg-slate-300 rounded"></div>
              <div className="h-1.5 bg-slate-300 rounded w-3/4"></div>
              <div className="h-1.5 bg-slate-300 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      );
  }
}

// Helper function
function getResumeCountText(count: number): string {
  if (count === 0) return 'No resumes';
  if (count === 1) return '1 resume';
  return `${count} resumes`;
}
