export type Environment = 'local' | 'staging' | 'prod';

export interface EnvironmentProfile {
  name: Environment;
  analyticsEnabled: boolean;
  featureFlagsSource: 'static' | 'remote';
  secretsManagedExternally: boolean;
}

export const environments: EnvironmentProfile[] = [
  {
    name: 'local',
    analyticsEnabled: false,
    featureFlagsSource: 'static',
    secretsManagedExternally: false
  },
  {
    name: 'staging',
    analyticsEnabled: true,
    featureFlagsSource: 'remote',
    secretsManagedExternally: true
  },
  {
    name: 'prod',
    analyticsEnabled: true,
    featureFlagsSource: 'remote',
    secretsManagedExternally: true
  }
];
