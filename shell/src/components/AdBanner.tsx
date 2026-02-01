'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AdBannerProps {
  slot?: string;
  className?: string;
  style?: React.CSSProperties;
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  layout?: 'in-article' | 'in-feed' | 'display';
  position?: 'hero' | 'sidebar' | 'footer' | 'content';
}

export function AdBanner({
  slot,
  className,
  style = {},
  format = 'auto',
  layout = 'display',
  position = 'content',
}: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  
  // Get slot based on position if not provided
  const adSlot = slot || getDefaultSlot(position);

  useEffect(() => {
    if (!publisherId || !adSlot) return;

    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense push error:', e);
    }
  }, [publisherId, adSlot]);

  // Don't render if AdSense not configured (dev mode)
  if (!publisherId || !adSlot || publisherId === 'ca-pub-XXXXXXXXXXXXXXXX') {
    return (
      <div
        ref={adRef}
        className={cn(
          'bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center min-h-[100px]',
          className
        )}
        style={style}
      >
        <div className="text-center p-4">
          <p className="text-gray-400 text-sm font-medium">
            🎯 Ad Placeholder ({position})
          </p>
          <p className="text-gray-300 text-xs mt-1">
            {format} • {layout}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div ref={adRef} className={cn('ad-container', className)} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', ...style }}
        data-ad-client={publisherId}
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-ad-layout={layout !== 'display' ? layout : undefined}
        data-full-width-responsive="true"
      />
    </div>
  );
}

// Get default slot based on position
function getDefaultSlot(position: string): string | undefined {
  const slots: Record<string, string> = {
    hero: process.env.NEXT_PUBLIC_ADSENSE_SLOT_HERO || '',
    sidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR || '',
    footer: process.env.NEXT_PUBLIC_ADSENSE_SLOT_FOOTER || '',
    content: process.env.NEXT_PUBLIC_ADSENSE_SLOT_CONTENT || '',
  };
  
  return slots[position] || undefined;
}

// Hero Ad Section (for landing page)
export function HeroAdSection() {
  return (
    <section className="w-full py-4 px-4">
      <div className="max-w-4xl mx-auto">
        <AdBanner
          position="hero"
          format="auto"
          className="w-full min-h-[90px]"
          style={{ minHeight: '90px' }}
        />
      </div>
    </section>
  );
}

// Sidebar Ad (for dashboard/editor pages)
export function SidebarAd() {
  return (
    <aside className="hidden lg:block w-[300px] sticky top-4">
      <AdBanner
        position="sidebar"
        format="vertical"
        className="w-[300px] min-h-[600px]"
        style={{ width: '300px', minHeight: '600px' }}
      />
    </aside>
  );
}

// Footer Ad Section
export function FooterAdSection() {
  return (
    <section className="w-full py-6 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs text-gray-400 mb-2">Advertisement</p>
        <AdBanner
          position="footer"
          format="horizontal"
          className="w-full min-h-[90px]"
          style={{ minHeight: '90px' }}
        />
      </div>
    </section>
  );
}

// In-Content Ad (for articles/blog posts)
export function InContentAd() {
  return (
    <div className="my-8">
      <AdBanner
        position="content"
        format="fluid"
        layout="in-article"
        className="w-full"
      />
    </div>
  );
}
