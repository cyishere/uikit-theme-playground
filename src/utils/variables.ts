import type { ThemeVarCategory, ThemeVariablesCollection, ThemeVarValue } from './types';

export const FONT_FAMILIES = {
  global: [
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    '"DM Sans", system-ui, sans-serif',
    '"Nunito", sans-serif',
    '"Inter", sans-serif'
  ],
  heading: [
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    '"Cormorant Garamond", Georgia, serif',
    '"Nunito", sans-serif',
    '"Syne", sans-serif'
  ]
};

export const defaultVariables: ThemeVariablesCollection = {
  Colors: [
    {
      id: '@global-primary-background',
      label: 'Primary Background',
      type: 'color',
      value: '#1e87f0'
    },
    {
      id: '@global-secondary-background',
      label: 'Secondary Background',
      type: 'color',
      value: '#222222'
    },
    {
      id: '@global-success-background',
      label: 'Success Background',
      type: 'color',
      value: '#32d296'
    },
    {
      id: '@global-warning-background',
      label: 'Warning Background',
      type: 'color',
      value: '#faa05a'
    },
    {
      id: '@global-danger-background',
      label: 'Danger Background',
      type: 'color',
      value: '#f0506e'
    },
    {
      id: '@global-muted-background',
      label: 'Muted Background',
      type: 'color',
      value: '#f8f8f8'
    },
    {
      id: '@global-background',
      label: 'Body Background',
      type: 'color',
      value: '#ffffff'
    },
    {
      id: '@global-link-color',
      label: 'Link Color',
      type: 'color',
      value: '#1e87f0'
    },
    {
      id: '@global-emphasis-color',
      label: 'Emphasis Color',
      type: 'color',
      value: '#333333'
    },
    {
      id: '@global-inverse-color',
      label: 'Inverse Color',
      type: 'color',
      value: '#ffffff'
    }
  ],
  Typography: [
    {
      id: '@global-font-family',
      label: 'Font Family',
      type: 'text',
      value: FONT_FAMILIES.global[0]!
    },
    {
      id: '@base-heading-font-family',
      label: 'Heading Font Family',
      type: 'text',
      value: FONT_FAMILIES.heading[0]!
    },
    {
      id: '@global-font-size',
      label: 'Font Size',
      type: 'number',
      value: 16,
      unit: 'px'
    },
    {
      id: '@global-line-height',
      label: 'Line Height',
      type: 'number',
      value: 1.5,
      step: 0.05
    },
    {
      id: '@global-color',
      label: 'Text Color',
      type: 'color',
      value: '#666666'
    },
    {
      id: '@global-muted-color',
      label: 'Muted Text Color',
      type: 'color',
      value: '#999999'
    }
  ],
  Borders: [
    {
      id: '@button-border-radius',
      label: 'Button Border Radius',
      type: 'number',
      value: 0,
      unit: 'px'
    },
    {
      id: '@input-border-radius',
      label: 'Input Border Radius',
      type: 'number',
      value: 0,
      unit: 'px'
    },
    {
      id: '@card-border-radius',
      label: 'Card Border Radius',
      type: 'number',
      value: 0,
      unit: 'px'
    },
    {
      id: '@label-border-radius',
      label: 'Label Border Radius',
      type: 'number',
      value: 0,
      unit: 'px'
    },
    {
      id: '@global-border-width',
      label: 'Border Width',
      type: 'number',
      value: 1,
      unit: 'px'
    },
    {
      id: '@global-border',
      label: 'Border Color',
      type: 'color',
      value: '#e5e5e5'
    }
  ]
};

export const PRESET_THEME_NAMES = ['default', 'elegant', 'playful', 'bold'] as const;

export const presetThemeVariables: Record<
  Exclude<(typeof PRESET_THEME_NAMES)[number], 'default'>,
  Record<string, ThemeVarValue>
> = {
  elegant: {
    '@global-primary-background': '#b5622a',
    '@global-secondary-background': '#1a1814',
    '@global-success-background': '#2eb282',
    '@global-warning-background': '#e58c48',
    '@global-danger-background': '#ee3a5b',
    '@global-muted-background': '#f0ede6',
    '@global-background': '#f8f6f1',
    '@global-link-color': '#b5622a',
    '@global-emphasis-color': '#1a1814',
    '@global-inverse-color': '#ffffff',
    '@global-font-family': FONT_FAMILIES.global[1]!,
    '@base-heading-font-family': FONT_FAMILIES.heading[1]!,
    '@global-font-size': 16,
    '@global-line-height': 1.5,
    '@global-color': '#4a4740',
    '@global-muted-color': '#8c8880',
    '@button-border-radius': 0,
    '@input-border-radius': 0,
    '@card-border-radius': 0,
    '@label-border-radius': 0,
    '@global-border-width': 1,
    '@global-border': '#e8e4dc'
  },
  playful: {
    '@global-primary-background': '#7165c8',
    '@global-secondary-background': '#f589a8',
    '@global-success-background': '#43c796',
    '@global-warning-background': '#f3ba12',
    '@global-danger-background': '#f83f73',
    '@global-muted-background': '#ffffff',
    '@global-background': '#fdf8f3',
    '@global-link-color': '#f589a8',
    '@global-emphasis-color': '#333333',
    '@global-inverse-color': '#ffffff',
    '@global-font-family': FONT_FAMILIES.global[2]!,
    '@base-heading-font-family': FONT_FAMILIES.heading[2]!,
    '@global-font-size': 18,
    '@global-line-height': 1.65,
    '@global-color': '#2a2520',
    '@global-muted-color': '#b0aaa6',
    '@button-border-radius': 100,
    '@input-border-radius': 12,
    '@card-border-radius': 40,
    '@label-border-radius': 0,
    '@global-border-width': 3,
    '@global-border': '#ede7e0'
  },
  bold: {
    '@global-primary-background': '#1a5cff',
    '@global-secondary-background': '#3a3a3a',
    '@global-success-background': '#00c9a7',
    '@global-warning-background': '#ff941a',
    '@global-danger-background': '#ff2d78',
    '@global-muted-background': '#ffffff',
    '@global-background': '#f5f5f0',
    '@global-link-color': '#1e87f0',
    '@global-emphasis-color': '#333333',
    '@global-inverse-color': '#ffffff',
    '@global-font-family': FONT_FAMILIES.global[3]!,
    '@base-heading-font-family': FONT_FAMILIES.heading[3]!,
    '@global-font-size': 18,
    '@global-line-height': 1.5,
    '@global-color': '#0d0d0d',
    '@global-muted-color': '#999999',
    '@button-border-radius': 0,
    '@input-border-radius': 0,
    '@card-border-radius': 0,
    '@label-border-radius': 0,
    '@global-border-width': 1,
    '@global-border': '#0d0d0d'
  }
};

export const toCollectionStructure = (
  themeName: Exclude<(typeof PRESET_THEME_NAMES)[number], 'default'>
): ThemeVariablesCollection => {
  const preset = presetThemeVariables[themeName];

  return (Object.keys(defaultVariables) as ThemeVarCategory[]).reduce((state, category) => {
    state[category] = defaultVariables[category].map((v) => ({
      ...v,
      value: preset[v.id] ?? v.value
    }));
    return state;
  }, {} as ThemeVariablesCollection);
};
