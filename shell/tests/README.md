# Resume Builder - Testing Guide

## Unit Tests (Vitest)

### Run all tests
```bash
npm test
```

### Run tests once (CI mode)
```bash
npm run test:unit
```

### Run with coverage
```bash
npm run test:coverage
```

### Run specific test file
```bash
npx vitest tests/unit/components/button.test.tsx
```

## E2E Tests (Playwright)

### Install Playwright browsers (first time)
```bash
npx playwright install
```

### Run all E2E tests
```bash
npm run test:e2e
```

### Run with UI mode
```bash
npm run test:e2e:ui
```

### Run specific test
```bash
npx playwright test tests/e2e/landing.spec.ts
```

### Run in headed mode (see browser)
```bash
npx playwright test --headed
```

## Test Structure

```
tests/
├── e2e/                    # End-to-end tests
│   ├── landing.spec.ts     # Landing page tests
│   └── cv-flow.spec.ts     # CV creation flow
├── unit/                   # Unit tests
│   ├── components/         # Component tests
│   │   └── button.test.tsx
│   ├── services/           # Service tests
│   │   └── cv-service.test.ts
│   └── lib/                # Library tests
│       └── cv-schema.test.ts
└── setup.ts                # Test setup
```

## Writing Tests

### Component Test Example
```tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

test('renders button', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

### E2E Test Example
```tsx
import { test, expect } from '@playwright/test';

test('user can create CV', async ({ page }) => {
  await page.goto('/cvs/new');
  await page.getByLabel('First Name').fill('John');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Saved')).toBeVisible();
});
```

## CI/CD Integration

Tests run automatically on:
- Pull requests
- Push to main branch
- Before deployment

## Coverage Goals

- Components: 80%+
- Services: 90%+
- Utils: 90%+
