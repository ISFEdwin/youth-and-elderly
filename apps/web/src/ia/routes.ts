export const publicPages = [
  'Home',
  'How It Works',
  'Safety & Trust',
  'For Seniors',
  'For Youth',
  'For Families',
  'For Universities',
  'For Companies',
  'Pricing',
  'FAQ',
  'Contact'
] as const;

export interface PublicPageRoute {
  name: (typeof publicPages)[number];
  path: string;
  includeInPrimaryNav: boolean;
}

export const publicPageRoutes: PublicPageRoute[] = [
  { name: 'Home', path: '/', includeInPrimaryNav: true },
  { name: 'How It Works', path: '/how-it-works', includeInPrimaryNav: true },
  { name: 'Safety & Trust', path: '/safety-and-trust', includeInPrimaryNav: true },
  { name: 'For Seniors', path: '/for-seniors', includeInPrimaryNav: true },
  { name: 'For Youth', path: '/for-youth', includeInPrimaryNav: true },
  { name: 'For Families', path: '/for-families', includeInPrimaryNav: true },
  { name: 'For Universities', path: '/for-universities', includeInPrimaryNav: true },
  { name: 'For Companies', path: '/for-companies', includeInPrimaryNav: true },
  { name: 'Pricing', path: '/pricing', includeInPrimaryNav: true },
  { name: 'FAQ', path: '/faq', includeInPrimaryNav: true },
  { name: 'Contact', path: '/contact', includeInPrimaryNav: true }
] as const;

export const audienceCtaRoutes = {
  seniors: '/for-seniors#start',
  youth: '/for-youth#start',
  families: '/for-families#start',
  universities: '/for-universities#pilot',
  companies: '/for-companies#pilot'
} as const;

export const authenticatedAreas = {
  senior: ['appointments', 'lessons-hosted', 'wallet', 'profile', 'guardian-settings'],
  youth: ['sessions', 'gigs', 'wallet', 'rewards-conversion', 'profile', 'impact-badge'],
  guardian: ['activity-logs', 'safety-alerts'],
  partner_admin: ['cohort-management', 'usage-reports', 'moderation-queue']
} as const;
