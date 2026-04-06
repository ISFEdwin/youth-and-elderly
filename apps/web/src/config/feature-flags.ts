export interface FeatureFlags {
  storyNodesEditing: boolean;
  advancedAiMatchmaker: boolean;
}

export const featureFlags: FeatureFlags = {
  storyNodesEditing: false,
  advancedAiMatchmaker: false
};

export const featureReleaseMap = {
  storyNodesEditing: 'phase3',
  advancedAiMatchmaker: 'phase2'
} as const;
