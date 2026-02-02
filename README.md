# 🎯 Resume Builder - AI-Powered CV Creator

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

**Professional resume builder powered by AI with Next.js, TypeScript, and Tailwind CSS**

[🚀 Live Demo](https://shell-c9tmx4h3t-cv-smart-ais-projects.vercel.app) · [📖 Documentation](./docs) · [🐛 Report Bug](../../issues) · [✨ Request Feature](../../issues)

</div>

---

## ✨ Features

- 🎨 **Beautiful Templates** - 3 professional resume templates (Modern, Classic, Creative)
- 🤖 **AI-Powered** - Smart suggestions and content optimization
- 📄 **PDF Export** - High-quality PDF generation with html2canvas + jsPDF
- 🔐 **Secure Auth** - Clerk authentication integration
- ☁️ **Cloud Storage** - Supabase backend for data persistence
- 📱 **Responsive** - Works perfectly on all devices
- 🎭 **Smooth Animations** - Framer Motion powered interactions
- 🔍 **SEO Optimized** - Built-in SEO best practices (Sitemap, Robots, Schema)
- 📊 **Analytics** - Google Analytics integration
- 💰 **Monetization Ready** - Google AdSense integration
- 🧪 **Fully Tested** - Playwright E2E tests + Vitest unit tests

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- [Clerk](https://clerk.dev) account (for authentication)
- [Supabase](https://supabase.com) account (for backend)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CVsmartAi1/resume-builder.git
   cd resume-builder/shell
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Add your keys to `.env.local`:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
   CLERK_SECRET_KEY=sk_test_xxxxx
   
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxx
   SUPABASE_SERVICE_ROLE_KEY=xxxxx
   
   # Google Analytics (optional)
   NEXT_PUBLIC_GA_ID=G-XXXXX
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript 5.3](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Animations:** [Framer Motion 12](https://www.framer.com/motion/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Forms:** React Hook Form + Zod

### Backend
- **Authentication:** [Clerk](https://clerk.dev/)
- **Database:** [Supabase](https://supabase.com/) (PostgreSQL)
- **Storage:** Supabase Storage

### PDF Generation
- **html2canvas** + **jsPDF** for high-quality PDF export

### Testing
- **E2E:** [Playwright](https://playwright.dev/)
- **Unit:** [Vitest](https://vitest.dev/)
- **Testing Library:** [React Testing Library](https://testing-library.com/)

---

## 📁 Project Structure

```
resume-builder/
├── shell/                      # Main application
│   ├── app/                   # Next.js app directory
│   │   ├── (marketing)/       # Marketing pages (landing, blog)
│   │   ├── cvs/               # CV creation & editing
│   │   ├── dashboard/         # User dashboard
│   │   ├── profile/           # User profile
│   │   ├── settings/          # User settings
│   │   └── sign-in/           # Authentication
│   ├── components/
│   │   ├── landing/           # Landing page sections
│   │   ├── resume/            # Resume editor & preview
│   │   ├── forms/             # Form components
│   │   ├── dashboard/         # Dashboard components
│   │   └── ui/                # UI components (shadcn)
│   ├── lib/
│   │   ├── services/          # API services
│   │   ├── supabase/          # Supabase clients
│   │   ├── cv-schema.ts       # Zod validation schemas
│   │   └── utils.ts           # Utilities
│   ├── context/               # React context
│   ├── hooks/                 # Custom hooks
│   ├── types/                 # TypeScript types
│   └── tests/                 # Test files
│       ├── e2e/               # Playwright tests
│       └── unit/              # Vitest tests
└── README.md                  # This file
```

---

## 🧪 Testing

### Run all tests
```bash
npm test
```

### Unit tests
```bash
npm run test:unit
```

### E2E tests
```bash
npm run test:e2e
```

### E2E tests with UI mode
```bash
npm run test:e2e:ui
```

### Coverage report
```bash
npm run test:coverage
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk public key | ✅ |
| `CLERK_SECRET_KEY` | Clerk secret key | ✅ |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | ✅ |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key | ✅ |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | ✅ |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | ⚪ |

---

## 🗺️ Roadmap

- [x] Basic resume editor
- [x] PDF export
- [x] Authentication with Clerk
- [x] Cloud storage with Supabase
- [x] Multiple templates (Modern, Classic, Creative)
- [x] SEO optimization (Sitemap, Robots, Schema)
- [x] Google Analytics integration
- [x] E2E tests with Playwright
- [x] Unit tests with Vitest
- [ ] AI content suggestions
- [ ] Cover letter generator
- [ ] LinkedIn integration
- [ ] ATS score checker
- [ ] More templates
- [ ] Multi-language support

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) for details.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 👥 Authors

- **CVsmartAi1** - *Initial work* - [GitHub](https://github.com/CVsmartAi1)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Clerk](https://clerk.dev/) for authentication
- [Supabase](https://supabase.com/) for backend services
- [shadcn/ui](https://ui.shadcn.com/) for UI components
- All contributors who help improve this project

---

## 📞 Support

- 🐛 **Issues:** [GitHub Issues](../../issues)
- 💬 **Discussions:** [GitHub Discussions](../../discussions)

---

<div align="center">

**Made with ❤️ by CVsmartAi1**

[⬆ Back to top](#-resume-builder---ai-powered-cv-creator)

</div>
