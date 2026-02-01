// Analytics utility for tracking events
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Track page views
export function pageview(url: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
}

// Track events
export function trackEvent(
  action: string,
  params?: {
    category?: string;
    label?: string;
    value?: number;
    [key: string]: any;
  }
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: params?.category,
      event_label: params?.label,
      value: params?.value,
      ...params,
    });
  }
}

// Specific events for our app
export const analytics = {
  // CV events
  cvCreated: (template: string) =>
    trackEvent('cv_created', { category: 'CV', label: template }),
  
  cvUpdated: (id: string) =>
    trackEvent('cv_updated', { category: 'CV', label: id }),
  
  cvDeleted: (id: string) =>
    trackEvent('cv_deleted', { category: 'CV', label: id }),
  
  cvDuplicated: (id: string) =>
    trackEvent('cv_duplicated', { category: 'CV', label: id }),
  
  // PDF events
  pdfExported: (template: string) =>
    trackEvent('pdf_exported', { category: 'PDF', label: template }),
  
  // Template events
  templateSelected: (template: string) =>
    trackEvent('template_selected', { category: 'Template', label: template }),
  
  templateChanged: (from: string, to: string) =>
    trackEvent('template_changed', { 
      category: 'Template', 
      from,
      to,
    }),
  
  // Form events
  formCompleted: (formName: string) =>
    trackEvent('form_completed', { category: 'Form', label: formName }),
  
  // Auth events
  userSignedUp: (method: string) =>
    trackEvent('sign_up', { category: 'Auth', label: method }),
  
  userSignedIn: (method: string) =>
    trackEvent('sign_in', { category: 'Auth', label: method }),
  
  userSignedOut: () =>
    trackEvent('sign_out', { category: 'Auth' }),
};

// TypeScript types for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
