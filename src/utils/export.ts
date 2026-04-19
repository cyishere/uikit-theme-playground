import type { ThemeVariablesCollection } from './types';
import pkg from '../../package.json';

export const generateLessTheme = (variablesCollection: ThemeVariablesCollection) => {
  const timestamp = new Date().toISOString().split('T')[0];
  let content = `// UIkit Custom Theme - Generated on ${timestamp}\n`;
  content += `// UIkit Version: ${pkg.devDependencies.uikit}\n\n`;

  content += `@import "uikit/uikit.theme.less";\n\n`;
  content += `// Custom Variables\n`;

  for (const [category, variables] of Object.entries(variablesCollection)) {
    content += `\n// --- ${category} ---\n`;

    variables.forEach((v) => {
      content += `${v.id}: ${v.unit ? v.value + v.unit : v.value};\n`;
    });
  }

  return content;
};

export const downloadFile = (filename: string, text: string) => {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const element = document.createElement('a');

  element.setAttribute('href', url);
  element.setAttribute('download', filename);
  element.style.display = 'none';

  document.body.appendChild(element);
  element.click();

  document.body.removeChild(element);
  URL.revokeObjectURL(url);
};
