import type { ThemeVariablesCollection } from '@/utils/types';
import { reactive, watch } from 'vue';
import { defaultVariables } from '@/utils/variables';

const THEME_STORAGE_KEY = 'uikit-playground-theme';
const SELECTED_THEME_KEY = 'uikit-playground-selected-theme';

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
  selectedTheme: (localStorage.getItem(SELECTED_THEME_KEY) || 'default') as string,
  compiling: false
});

let isSyncing = false;
let isApplyingPreset = false;

// Persist theme changes to localStorage
watch(
  () => themeState.variablesCollection,
  (newVars) => {
    if (isSyncing) return;

    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(newVars));

    if (!isApplyingPreset) {
      themeState.selectedTheme = 'custom';
      localStorage.setItem(SELECTED_THEME_KEY, 'custom');
    }
  },
  { deep: true }
);

/**
 * Updates the theme collection from a preset and manages the selection state.
 */
export const updateThemeFromPreset = (themeName: string, collection: ThemeVariablesCollection) => {
  isApplyingPreset = true;
  themeState.variablesCollection = structuredClone(collection);
  themeState.selectedTheme = themeName;
  localStorage.setItem(SELECTED_THEME_KEY, themeName);

  // Reset the flag in the next tick to ensure the watcher doesn't trigger 'custom'
  setTimeout(() => {
    isApplyingPreset = false;
  }, 0);
};

// Listen for changes from other tabs
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (event.key === THEME_STORAGE_KEY && event.newValue) {
      try {
        // Only update if the values are actually different
        if (event.newValue === JSON.stringify(themeState.variablesCollection)) {
          return;
        }

        isSyncing = true;
        const incoming = JSON.parse(event.newValue);
        themeState.variablesCollection = incoming;
        applyTheme(true);

        // Reset the flag after the current execution context and potential watcher triggers
        setTimeout(() => {
          isSyncing = false;
        }, 0);
      } catch (error) {
        console.error('Failed to sync theme from storage:', error);
        isSyncing = false;
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
          (state, v) => {
            state[v.id] = v.unit ? `${v.value}${v.unit}` : v.value.toString();
            return state;
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
  localStorage.removeItem(SELECTED_THEME_KEY);

  updateThemeFromPreset('default', defaultVariables);
  applyTheme(true);
};
