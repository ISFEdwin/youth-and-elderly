export type LaunchAudience = 'youth' | 'senior' | 'guardian' | 'partner_admin';

export interface PhaseScope {
  phase: 'phase1' | 'phase2' | 'phase3';
  includes: string[];
  deferred: string[];
  launchAudience: LaunchAudience[];
}

export const phase1Scope: PhaseScope = {
  phase: 'phase1',
  includes: [
    'marketing-site',
    'onboarding',
    'profiles',
    'matching-discovery',
    'session-booking',
    'v-credit-wallet',
    'messaging',
    'guardian-mode-dashboard'
  ],
  deferred: [
    'story-nodes-editing',
    'advanced-ai-matchmaker'
  ],
  launchAudience: ['youth', 'senior', 'guardian', 'partner_admin']
};
