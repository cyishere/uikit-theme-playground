export type ThemeVarCategory = 'Colors' | 'Typography' | 'Borders';

export type ThemeVariable = {
  id: string;
  label: string;
  type: 'color' | 'text' | 'number';
  value: string;
  unit?: string;
  step?: number;
};
