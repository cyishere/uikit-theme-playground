import type { ThemeVariablesCollection } from './types';

export const FONT_FAMILIES = {
  global: [
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    '"DM Sans", system-ui, sans-serif'
  ],
  heading: [
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    '"Cormorant Garamond", Georgia, serif'
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
      value: '16',
      unit: 'px'
    },
    {
      id: '@global-line-height',
      label: 'Line Height',
      type: 'number',
      value: '1.5',
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
      id: '@global-border-radius',
      label: 'Border Radius',
      type: 'number',
      value: '0',
      unit: 'px'
    },
    {
      id: '@global-border-width',
      label: 'Border Width',
      type: 'number',
      value: '1',
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
