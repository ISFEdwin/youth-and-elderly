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

export const authenticatedAreas = {
  senior: ['appointments', 'lessons-hosted', 'wallet', 'profile', 'guardian-settings'],
  youth: ['sessions', 'gigs', 'wallet', 'rewards-conversion', 'profile', 'impact-badge'],
  guardian: ['activity-logs', 'safety-alerts'],
  partner_admin: ['cohort-management', 'usage-reports', 'moderation-queue']
} as const;
