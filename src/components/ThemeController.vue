<script setup lang="ts">
import type { ThemeVariable } from '@/utils/types';
import { watch } from 'vue';
import { toCamelCase } from '@/utils/formatter';
import { downloadFile, generateLessTheme } from '@/utils/export';
import { FONT_FAMILIES } from '@/utils/variables';
import { applyTheme, resetTheme, themeState } from '@/stores/theme';

const { idPrefix } = defineProps<{
  idPrefix: string;
}>();

const getUniqueId = (id: string) => {
  const camelId = toCamelCase(id);
  return idPrefix ? `${idPrefix}-${camelId}` : camelId;
};

const getRangeAttrs = (variable: ThemeVariable) => ({
  step: variable.step ?? 1,
  min: variable.id === '@global-line-height' ? 1 : 0,
  max: variable.id === '@global-line-height' ? 2 : 100
});

const handleExport = () => {
  const lessContent = generateLessTheme(themeState.variablesCollection);
  downloadFile('uikit-custom-theme.less', lessContent);
};

watch(
  () => themeState.variablesCollection,
  () => applyTheme(),
  { deep: true, immediate: true }
);
</script>

<template>
  <div>
    <div
      class="uk-margin-large-bottom"
      v-for="(variables, category) in themeState.variablesCollection"
      :key="category"
    >
      <h3 class="uk-text-uppercase uk-text-muted uk-heading-divider">{{ category }}</h3>
      <div class="uk-form-stacked">
        <div v-for="variable in variables" :key="variable.id" class="uk-margin-bottom">
          <div class="uk-flex uk-flex-between uk-flex-middle">
            <label class="uk-form-label" :for="getUniqueId(variable.id)">{{ variable.id }}</label>
            <span v-if="variable.type === 'number'" class="uk-text-success">
              {{ variable.value }}{{ variable.unit }}
            </span>
          </div>

          <div v-if="variable.id === '@global-font-family'" class="uk-form-controls">
            <select
              class="uk-select"
              :id="getUniqueId(variable.id)"
              aria-label="Select Font"
              v-model="variable.value"
            >
              <option v-for="ff in FONT_FAMILIES.global" :key="ff" :value="ff">{{ ff }}</option>
            </select>
          </div>

          <div v-if="variable.id === '@base-heading-font-family'" class="uk-form-controls">
            <select
              class="uk-select"
              :id="getUniqueId(variable.id)"
              aria-label="Select Font"
              v-model="variable.value"
            >
              <option v-for="ff in FONT_FAMILIES.heading" :key="ff" :value="ff">{{ ff }}</option>
            </select>
          </div>

          <div class="uk-form-controls uk-flex uk-flex-middle">
            <input
              v-if="variable.type === 'color'"
              type="color"
              class="uk-margin-small-right"
              :name="variable.id.slice(1)"
              v-model="variable.value"
            />

            <input
              v-if="variable.type === 'number'"
              type="range"
              class="uk-range uk-margin-top"
              :name="variable.id.slice(1)"
              :id="getUniqueId(variable.id)"
              v-bind="getRangeAttrs(variable)"
              v-model="variable.value"
            />

            <input
              v-if="variable.type !== 'number' && !variable.id.includes('font-family')"
              type="text"
              :name="variable.id.slice(1)"
              :id="getUniqueId(variable.id)"
              class="uk-input"
              v-model="variable.value"
            />
          </div>
        </div>
      </div>
    </div>

    <button
      type="button"
      class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
      @click="handleExport"
    >
      <span uk-icon="download" class="uk-margin-small-right"></span>
      Download
    </button>

    <button type="button" class="uk-button uk-button-danger uk-width-1-1" @click="resetTheme">
      <span uk-icon="trash" class="uk-margin-small-right"></span>
      Clear Workspace
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
