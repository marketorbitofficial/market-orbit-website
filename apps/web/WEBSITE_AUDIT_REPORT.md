# Next.js Codebase Audit Report
**Date:** 2026-06-26
**Next.js Version:** ^16.2.7
**Router:** App Router
**Total Files Reviewed:** 45+

---

## Executive Summary
The codebase is visually impressive and leverages modern React/Next.js features, but it has critical architectural flaws that will severely impact SEO, initial page load performance, and security in production. The most urgent issue is the widespread misuse of the `"use client"` directive at the page level across the `/app` directory, which forces the entire application to be client-side rendered, negating Next.js's primary benefits. By migrating these pages to Server Components and implementing proper metadata, the site will see a massive improvement in search rankings and perceived performance.

## Severity Legend
- 🔴 Critical — Broken in production or kills SEO/security
- 🟠 High — Significant impact, fix within 1 week
- 🟡 Medium — Noticeable improvement, fix within 1 month  
- 🟢 Low — Polish and best practices

---

## 1. Next.js-Specific Issues
| # | Issue | File | Line (if known) | Severity | Fix Summary |
|---|-------|------|-----------------|----------|-------------|
| 1 | Pages marked with `"use client"` | `app/about/page.tsx`, `app/services/page.tsx`, `app/partner/page.tsx`, etc. | 1 | 🔴 Critical | Remove `"use client"` from page routes. Only use it on interactive leaf components. |
| 2 | `<img>` tag used instead of `next/image` | `app/partner/page.tsx`, `app/careers/Hero.tsx` | 159, 7 | 🟠 High | Replace native `<img>` tags with Next.js `<Image>` for automatic optimization. |

### Code Fixes

**Issue #1: `"use client"` on Page Routes (`app/about/page.tsx`)**
*BEFORE:*
```tsx
"use client";
import React from "react";
// ...
export default function AboutPage() {
  return <div className="...">...</div>;
}
```

*AFTER:*
```tsx
// Removed "use client" - Page is now a Server Component
import React from "react";
// ...
export default function AboutPage() {
  return <div className="...">...</div>;
}
```

**Issue #2: Native `<img>` tags (`app/careers/Hero.tsx`)**
*BEFORE:*
```tsx
        <img
          src="https://images.unsplash.com/photo-..."
          alt="Market Orbit team"
          className="w-full h-full object-cover"
        />
```

*AFTER:*
```tsx
import Image from "next/image";

        <Image
          src="https://images.unsplash.com/photo-..."
          alt="Market Orbit team"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          priority
        />
```

---

## 2. Performance & Bundle Size
| # | Issue | File | Line (if known) | Severity | Fix Summary |
|---|-------|------|-----------------|----------|-------------|
| 1 | Missing lazy loading for below-the-fold content | `app/page.tsx` | - | 🟡 Medium | Use `next/dynamic` for heavy components like `Stats` to reduce initial JS payload. |

### Code Fixes

**Issue #1: Lazy loading below-the-fold components (`app/page.tsx`)**
*BEFORE:*
```tsx
import Stats from "@/components/sections/Stats";
```

*AFTER:*
```tsx
import dynamic from "next/dynamic";
const Stats = dynamic(() => import("@/components/sections/Stats"));
```

---

## 3. SEO
| # | Issue | File | Line (if known) | Severity | Fix Summary |
|---|-------|------|-----------------|----------|-------------|
| 1 | Missing Page-Specific Metadata | All files in `app/*/page.tsx` | - | 🔴 Critical | Export `metadata` from every page for unique title/descriptions. |
| 2 | Missing Open Graph Tags | `app/layout.tsx` | 18 | 🟠 High | Add `openGraph` and `twitter` objects to global metadata. |
| 3 | Missing robots.txt & sitemap.xml | `public/robots.txt`, `public/sitemap.xml` | - | 🟠 High | Create these files to ensure search engines can crawl the site. |

### Code Fixes

**Issue #1 & #2: Missing Metadata (`app/about/page.tsx`)**
*BEFORE:*
```tsx
export default function AboutPage() {
```

*AFTER:*
```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Market Orbit",
  description: "Learn about Market Orbit, a full-service marketing agency...",
  openGraph: {
    title: "About Us | Market Orbit",
    description: "Learn about Market Orbit...",
    url: "https://marketorbit.in/about",
  }
};

export default function AboutPage() {
```

---

## 4. Responsiveness
| # | Issue | File | Line (if known) | Severity | Fix Summary |
|---|-------|------|-----------------|----------|-------------|
| 1 | Hardcoded translations in animations | `components/layout/CursorGlow.tsx` | 30 | 🟢 Low | `translate(${currentX - 210}px)` assumes desktop screens. Might behave oddly on smaller screens if touch device check fails. |

### Code Fixes

**Issue #1: CursorGlow offset**
*BEFORE:*
```tsx
blobRef.current.style.transform = `translate(${currentX - 210}px, ${currentY - 210}px)`;
```

*AFTER:*
```tsx
// Using percentage offsets is generally safer if the blob size is responsive
blobRef.current.style.transform = `translate(calc(${currentX}px - 50%), calc(${currentY}px - 50%))`;
```

---

## 5. Accessibility
| # | Issue | File | Line (if known) | Severity | Fix Summary |
|---|-------|------|-----------------|----------|-------------|
| 1 | SVG icons missing title/aria-hidden | `components/sections/Hero.tsx` | 12-58 | 🟡 Medium | Add `aria-hidden="true"` to decorative SVGs in the marquee. |

### Code Fixes

**Issue #1: Decorative SVGs (`components/sections/Hero.tsx`)**
*BEFORE:*
```tsx
<svg className="w-5 h-5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
```

*AFTER:*
```tsx
<svg aria-hidden="true" focusable="false" className="w-5 h-5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
```

---

## 6. Security
| # | Issue | File | Line (if known) | Severity | Fix Summary |
|---|-------|------|-----------------|----------|-------------|
| 1 | Missing Security Headers | `next.config.ts` | 3 | 🟠 High | Implement `headers()` to enforce CSP, X-Frame-Options, etc. |

### Code Fixes
See the recommended `next.config.ts` section below.

---

## 7. Recommended next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Security: Removes X-Powered-By header
  images: {
    // Required if you are going to use next/image with Unsplash or other external domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          }
        ],
      },
    ];
  },
};

export default nextConfig;
```

---

## 8. Production Readiness Checklist
- [ ] reactStrictMode enabled
- [ ] No console.logs in production (Found: `console.log(formData)` in `components/ContactForm.tsx:44`)
- [ ] Custom 404 page (not-found.tsx) missing
- [ ] Custom error page (error.tsx) missing
- [ ] robots.txt present and correct
- [ ] sitemap.xml present and includes all routes
- [ ] Security headers configured
- [ ] All images use next/image
- [ ] Metadata on every route
- [ ] TODO comments addressed (Found: `// TODO: Footer component` in `components/sections/Footer.tsx:1`)

---

## 9. Analytics & Monitoring
| # | Issue | File | Line | Severity | Fix Summary |
|---|-------|------|------|----------|-------------|
| 1 | No Analytics Setup | `package.json` | - | 🟡 Medium | Install and configure `@vercel/analytics` or Google Analytics. |

---

## Priority Action Plan

### 🔴 Fix Before Going Live
1. **Remove `"use client"` from page routes** across `app/*/page.tsx`. This is severely damaging to SEO and page load times.

### 🟠 Fix This Week  
1. **Add `metadata` to all pages** in the `/app` directory to ensure unique titles and descriptions.
2. **Update `next.config.ts`** to include security headers and `poweredByHeader: false`.
3. **Add `robots.txt` and `sitemap.xml`** to `/public`.

### 🟡 Fix This Month
1. **Replace `<img>` tags with Next/Image** in `app/partner/page.tsx` and `app/careers/Hero.tsx`.
2. Implement custom `not-found.tsx` and `error.tsx` boundaries.

### 🟢 Nice to Have
1. Lazy load below-the-fold components using `next/dynamic`.
2. Add `aria-hidden` to decorative SVGs.

---

## Impact vs Effort Matrix
| Fix | File | Effort (hrs) | SEO Impact | Perf Impact | Security Impact |
|-----|------|--------------|------------|-------------|-----------------|
| Remove `"use client"` | `app/*/page.tsx` | 1 | High | High | None |
| Add Page Metadata | `app/*/page.tsx` | 2 | High | None | None |
| Security Headers | `next.config.ts` | 0.5 | None | None | High |
| Implement Next/Image | Various | 1 | Medium | High | None |

---

**Overall Codebase Health Score: 65/100**
**SEO Readiness: 40/100**  
**Performance Readiness: 60/100**
**Security Score: 50/100**
