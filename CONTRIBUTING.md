# Contributing to Resume Builder

First off, thank you for considering contributing to Resume Builder! 🎉

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check [existing issues](../../issues) to see if the problem has already been reported. When creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (commands, code snippets, etc.)
- **Describe the behavior you observed** and what you expected
- **Include screenshots** if the problem is UI-related
- **Include your environment details:**
  - OS and version
  - Node.js version
  - Browser (if applicable)
  - Package manager (npm/yarn/pnpm)

### Suggesting Enhancements

Enhancement suggestions are tracked as [GitHub issues](../../issues). When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List some examples** of how it would be used

### Pull Requests

1. **Fork the repository** and create your branch from `master`
2. **Install dependencies:** `npm install`
3. **Make your changes** and add tests if applicable
4. **Ensure the test suite passes:** `npm run test:unit`
5. **Make sure your code lints:** `npm run lint`
6. **Commit your changes** following our commit message conventions
7. **Push to your fork** and submit a pull request

## Development Setup

```bash
# 1. Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/resume-builder.git
cd resume-builder/shell

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.local.example .env.local

# 4. Add your API keys to .env.local
# - Clerk keys (get from https://dashboard.clerk.dev)
# - Supabase keys (get from https://app.supabase.io)

# 5. Start development server
npm run dev

# 6. Open http://localhost:3000
```

## Project Structure

```
shell/
├── app/                 # Next.js App Router
│   ├── (marketing)/     # Marketing pages
│   ├── cvs/             # CV editor pages
│   └── dashboard/       # User dashboard
├── components/          # React components
│   ├── landing/         # Landing page sections
│   ├── resume/          # Resume components
│   ├── forms/           # Form components
│   └── ui/              # UI components (shadcn/ui)
├── lib/                 # Utilities & services
│   ├── services/        # API services
│   └── supabase/        # Supabase clients
├── context/             # React context providers
├── hooks/               # Custom React hooks
├── types/               # TypeScript types
└── tests/               # Test files
    ├── e2e/             # Playwright E2E tests
    └── unit/            # Vitest unit tests
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types, avoid `any`
- Use interfaces for object shapes
- Use type aliases for unions/intersections

```typescript
// ✅ Good
interface User {
  id: string;
  name: string;
  email: string;
}

// ❌ Bad
const user: any = { ... };
```

### React

- Use functional components with hooks
- Keep components small and focused (Single Responsibility Principle)
- Use proper prop types
- Follow React best practices

```typescript
// ✅ Good
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick} className={variant}>
      {children}
    </button>
  );
}
```

### Styling

- Use Tailwind CSS utility classes
- Follow existing naming conventions
- Keep styles consistent with the design system
- Use `cn()` utility for conditional classes

```tsx
// ✅ Good
import { cn } from '@/lib/utils';

<div className={cn(
  'flex items-center gap-2',
  isActive && 'bg-blue-500',
  className
)}>
```

### Git Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues and pull requests when applicable

**Commit Types:**

```
feat:     A new feature
fix:      A bug fix
docs:     Documentation only changes
style:    Changes that don't affect code meaning (formatting, etc.)
refactor: Code change that neither fixes a bug nor adds a feature
perf:     Code change that improves performance
test:     Adding missing tests or correcting existing tests
chore:    Changes to build process or auxiliary tools
```

**Examples:**

```bash
feat: Add AI content suggestions to resume editor
fix: Resolve PDF export issue with long content
docs: Update README with new deployment instructions
style: Format code with prettier
refactor: Simplify authentication logic in middleware
test: Add E2E tests for CV creation flow
chore: Update dependencies to latest versions
```

## Testing

### Unit Tests

```bash
# Run unit tests
npm run test:unit

# Run unit tests in watch mode
npm run test:unit -- --watch

# Run with coverage
npm run test:coverage
```

### E2E Tests

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui
```

### Writing Tests

**Unit Test Example:**

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalled();
  });
});
```

## Questions?

Feel free to [open an issue](../../issues) or reach out to the maintainers!

Thank you for contributing! 🙏
