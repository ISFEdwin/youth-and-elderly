export type UserRole = 'senior' | 'youth' | 'guardian' | 'partner_admin';

const classicLabels = {
  sessions: 'Appointments',
  gigs: 'Lessons',
  profile: 'My Profile'
} as const;

const pulseLabels = {
  sessions: 'Sessions',
  gigs: 'Gigs',
  profile: 'My Vantage'
} as const;

export const roleNavigation: Record<UserRole, string[]> = {
  senior: ['home', 'appointments', 'lessons', 'wallet', 'profile', 'guardian-settings'],
  youth: ['home', 'sessions', 'gigs', 'wallet', 'rewards', 'my-vantage'],
  guardian: ['overview', 'activity-logs', 'safety-alerts'],
  partner_admin: ['dashboard', 'cohorts', 'reports', 'moderation']
};

export const terminology = {
  classic: classicLabels,
  pulse: pulseLabels
};
