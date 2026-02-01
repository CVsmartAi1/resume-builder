'use client';

import Link from 'next/link';
import { 
  User, 
  Calendar, 
  Clock, 
  Share2, 
  Linkedin, 
  Twitter,
  Facebook
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface AuthorBoxProps {
  name?: string;
  title?: string;
  bio?: string;
  date?: string;
  readTime?: string;
  showShare?: boolean;
}

export function AuthorBox({
  name = 'Resume Builder Team',
  title = 'Career Experts',
  bio = 'We help job seekers create professional resumes that get noticed by recruiters and pass ATS systems.',
  date,
  readTime,
  showShare = true,
}: AuthorBoxProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = typeof document !== 'undefined' ? document.title : '';

  const handleShare = (platform: 'linkedin' | 'twitter' | 'facebook') => {
    const urls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    };
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="bg-gray-50 rounded-xl p-6 border">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarFallback className="bg-blue-600 text-white text-xl font-semibold">
            {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div>
              <h4 className="font-semibold text-gray-900">{name}</h4>
              <p className="text-sm text-gray-500">{title}</p>
            </div>
            
            {(date || readTime) && (
              <div className="flex items-center gap-4 text-sm text-gray-500">
                {date && (
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {date}
                  </span>
                )}
                {readTime && (
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {readTime}
                  </span>
                )}
              </div>
            )}
          </div>
          
          <p className="text-gray-600 mt-2 text-sm">{bio}</p>
        </div>

        {showShare && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 hidden sm:inline">Share:</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={() => handleShare('linkedin')}
            >
              <Linkedin className="h-4 w-4 text-[#0077b5]" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={() => handleShare('twitter')}
            >
              <Twitter className="h-4 w-4 text-[#1da1f2]" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full"
              onClick={() => handleShare('facebook')}
            >
              <Facebook className="h-4 w-4 text-[#4267B2]" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
