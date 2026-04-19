import { reactive, watch } from 'vue';
import type { ThemeVariablesCollection } from './types';
import { defaultVariables } from './variables';

const THEME_STORAGE_KEY = 'uikit-playground-theme';

const getInitialVariablesCollection = (): ThemeVariablesCollection => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);

  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (error) {
      console.error('Failed to parse stored theme:', error);
    }
  }

  return structuredClone(defaultVariables);
};

export const themeState = reactive({
  variablesCollection: getInitialVariablesCollection(),
  compiling: false
});

// Persist theme changes to localStorage
watch(
  () => themeState.variablesCollection,
  (newVars) => {
    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(newVars));
  },
  { deep: true }
);

// Listen for changes from other tabs
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (event.key === THEME_STORAGE_KEY && event.newValue) {
      try {
        themeState.variablesCollection = JSON.parse(event.newValue);
        applyTheme(true);
      } catch (error) {
        console.error('Failed to sync theme from storage:', error);
      }
    }
  });
}

let debounceTimer: ReturnType<typeof setTimeout> | null = null;

/**
 * Cancels any pending theme update.
 */
export const cancelThemeUpdate = () => {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
    debounceTimer = null;
  }
};

export const applyTheme = async (force = false) => {
  if (typeof window === 'undefined' || !window.less?.modifyVars) return;

  cancelThemeUpdate();

  const delay = force ? 0 : 200;

  return new Promise<void>((resolve) => {
    debounceTimer = setTimeout(async () => {
      try {
        themeState.compiling = true;
        const allVars = Object.values(themeState.variablesCollection).flat();
        const varsRecord = allVars.reduce(
          (curr, v) => {
            curr[v.id] = v.unit ? `${v.value}${v.unit}` : v.value;
            return curr;
          },
          {} as Record<string, string>
        );

        await window.less.modifyVars(varsRecord);
      } catch (error) {
        console.error('Failed to apply theme:', error);
      } finally {
        themeState.compiling = false;
        resolve();
      }
    }, delay);
  });
};

export const resetTheme = () => {
  localStorage.removeItem(THEME_STORAGE_KEY);
  themeState.variablesCollection = structuredClone(defaultVariables);
  applyTheme(true);
};
