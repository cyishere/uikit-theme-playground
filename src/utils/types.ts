export type ThemeVarCategory = 'Colors' | 'Typography' | 'Borders';

export type ThemeVarValue = string | number;

export type ThemeVariable = {
  id: string;
  label: string;
  type: 'color' | 'text' | 'number';
  value: ThemeVarValue;
  unit?: string;
  step?: number;
};

export type ThemeVariablesCollection = Record<ThemeVarCategory, ThemeVariable[]>;
