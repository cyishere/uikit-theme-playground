<script setup lang="ts">
import type { ThemeVariable } from '@/utils/types';
import { ref, watch, onBeforeUnmount } from 'vue';
import { toCamelCase } from '@/utils/formatter';
import { defaultVariables } from '@/utils/variables';

const compiling = defineModel<boolean>('compiling', { required: true });

const getInitialVariables = () => JSON.parse(JSON.stringify(defaultVariables));

const themeVariables = ref(getInitialVariables());

const resetTheme = () => {
  themeVariables.value = getInitialVariables();
};

const getRangeAttrs = (variable: ThemeVariable) => ({
  step: variable.step ?? 1,
  min: variable.id === '@global-line-height' ? 1 : 0,
  max: variable.id === '@global-line-height' ? 2 : 100
});

let debounceTimer: ReturnType<typeof setTimeout> | null = null;

onBeforeUnmount(() => {
  if (debounceTimer) clearTimeout(debounceTimer);
});

const applyTheme = async () => {
  if (!window.less) return;

  // Set compiling to true immediately so the CSS [data-compiling="true"]
  // dims the UI instantly while we wait for the debounce.
  compiling.value = true;

  if (debounceTimer) clearTimeout(debounceTimer);

  debounceTimer = setTimeout(async () => {
    try {
      const allVars = Object.values(themeVariables.value).flat() as ThemeVariable[];
      const varsRecord = allVars.reduce(
        (curr: Record<string, string>, v: ThemeVariable) => {
          curr[v.id] = v.unit ? `${v.value}${v.unit}` : v.value;
          return curr;
        },
        {} as Record<string, string>
      );

      await window.less.modifyVars(varsRecord);
    } catch (error) {
      console.error('Failed to apply theme:', error);
    } finally {
      compiling.value = false;
    }
  }, 200); // Reduced to 200ms for snappier performance
};

watch(themeVariables, () => applyTheme(), { deep: true, immediate: true });
</script>

<template>
  <div>
    <div
      class="uk-margin-large-bottom"
      v-for="(variables, category) in themeVariables"
      :key="category"
    >
      <h5 class="uk-text-uppercase uk-text-muted uk-heading-divider">{{ category }}</h5>
      <div class="uk-form-stacked">
        <div v-for="variable in variables" :key="variable.id" class="uk-margin-bottom">
          <div class="uk-flex uk-flex-between uk-flex-middle">
            <label class="uk-form-label" :for="toCamelCase(variable.id)">{{ variable.id }}</label>
            <span v-if="variable.type === 'number'" class="uk-text-success">
              {{ variable.value }}{{ variable.unit }}
            </span>
          </div>

          <div class="uk-form-controls uk-flex uk-flex-middle">
            <input
              v-if="variable.type === 'color'"
              type="color"
              class="uk-margin-small-right"
              v-model="variable.value"
            />

            <input
              v-if="variable.type === 'number'"
              type="range"
              class="uk-range uk-margin-top"
              v-bind="getRangeAttrs(variable)"
              v-model="variable.value"
            />

            <input
              v-if="variable.type !== 'number'"
              type="text"
              class="uk-input"
              v-model="variable.value"
            />
          </div>
        </div>
      </div>
    </div>

    <button type="button" class="uk-button uk-button-default uk-width-1-1" @click="resetTheme">
      Reset
    </button>
  </div>
</template>

<style scoped>
input[type='color'] {
  padding: 0;
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background: none;
}
</style>
