'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  ChevronDown, 
  Menu, 
  X,
  LayoutTemplate,
  BookOpen,
  Briefcase,
  Award
} from 'lucide-react';

const templateLinks = [
  { href: '/templates/software-engineer', label: 'Software Engineer' },
  { href: '/templates/data-analyst', label: 'Data Analyst' },
  { href: '/templates/marketing-manager', label: 'Marketing Manager' },
  { href: '/templates/product-manager', label: 'Product Manager' },
  { href: '/templates/ux-designer', label: 'UX Designer' },
  { href: '/templates/project-manager', label: 'Project Manager' },
  { href: '/templates/sales-manager', label: 'Sales Manager' },
  { href: '/templates/nurse', label: 'Nurse' },
  { href: '/templates/teacher', label: 'Teacher' },
  { href: '/templates/see-all', label: 'See All Templates →' },
];

const blogLinks = [
  { href: '/blog/ats-friendly-resume-tips', label: 'ATS Resume Tips' },
  { href: '/blog/how-to-write-professional-summary', label: 'Professional Summary' },
  { href: '/blog/resume-action-words', label: 'Action Words' },
  { href: '/blog/resume-formatting-guide', label: 'Formatting Guide' },
  { href: '/blog/see-all', label: 'See All Articles →' },
];

const industryLinks = [
  { href: '/industries/tech-resume-guide', label: 'Tech & IT' },
  { href: '/industries/healthcare-resume-guide', label: 'Healthcare' },
  { href: '/industries/finance-resume-guide', label: 'Finance' },
  { href: '/industries/marketing-resume-guide', label: 'Marketing' },
  { href: '/industries/see-all', label: 'See All Industries →' },
];

const exampleLinks = [
  { href: '/examples/software-engineer-resume-example', label: 'Software Engineer' },
  { href: '/examples/marketing-manager-resume-example', label: 'Marketing Manager' },
  { href: '/examples/entry-level-resume-example', label: 'Entry Level' },
  { href: '/examples/executive-resume-example', label: 'Executive' },
  { href: '/examples/see-all', label: 'See All Examples →' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="p-2 bg-blue-600 rounded-lg">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">Resume Builder</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Dropdown 
              label="Templates" 
              icon={<LayoutTemplate className="h-4 w-4" />}
              links={templateLinks}
              isOpen={openDropdown === 'templates'}
              onToggle={() => setOpenDropdown(openDropdown === 'templates' ? null : 'templates')}
            />
            
            <Dropdown 
              label="Resume Tips" 
              icon={<BookOpen className="h-4 w-4" />}
              links={blogLinks}
              isOpen={openDropdown === 'blog'}
              onToggle={() => setOpenDropdown(openDropdown === 'blog' ? null : 'blog')}
            />
            
            <Dropdown 
              label="Industries" 
              icon={<Briefcase className="h-4 w-4" />}
              links={industryLinks}
              isOpen={openDropdown === 'industries'}
              onToggle={() => setOpenDropdown(openDropdown === 'industries' ? null : 'industries')}
            />
            
            <Dropdown 
              label="Examples" 
              icon={<Award className="h-4 w-4" />}
              links={exampleLinks}
              isOpen={openDropdown === 'examples'}
              onToggle={() => setOpenDropdown(openDropdown === 'examples' ? null : 'examples')}
            />
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/cvs/new">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Create Resume
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-4">
              <MobileSection title="Templates" links={templateLinks} />
              <MobileSection title="Resume Tips" links={blogLinks} />
              <MobileSection title="Industries" links={industryLinks} />
              <MobileSection title="Examples" links={exampleLinks} />
              
              <Link href="/cvs/new" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Create Resume
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Dropdown({ 
  label, 
  icon, 
  links, 
  isOpen, 
  onToggle 
}: { 
  label: string; 
  icon: React.ReactNode;
  links: { href: string; label: string }[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={onToggle}
        onMouseEnter={onToggle}
      >
        {icon}
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2 z-50"
          onMouseLeave={() => onToggle()}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                link.label.includes('→') ? 'text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileSection({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
      <div className="space-y-1 pl-2">
        {links.filter(l => !l.label.includes('→')).slice(0, 5).map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="block py-1 text-sm text-gray-600 hover:text-blue-600"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
