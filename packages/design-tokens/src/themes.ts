export interface ThemeTokens {
  name: 'classic' | 'pulse';
  typography: {
    bodyMinPx: number;
    contrastTarget: 'AA' | 'AAA';
  };
  motion: {
    reducedByDefault: boolean;
  };
  density: 'comfortable' | 'compact';
  colorModeDefault: 'light' | 'dark';
}

export const classicTheme: ThemeTokens = {
  name: 'classic',
  typography: {
    bodyMinPx: 18,
    contrastTarget: 'AAA'
  },
  motion: {
    reducedByDefault: true
  },
  density: 'comfortable',
  colorModeDefault: 'light'
};

export const pulseTheme: ThemeTokens = {
  name: 'pulse',
  typography: {
    bodyMinPx: 14,
    contrastTarget: 'AA'
  },
  motion: {
    reducedByDefault: false
  },
  density: 'compact',
  colorModeDefault: 'dark'
};
