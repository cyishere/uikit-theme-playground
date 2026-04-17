<script setup lang="ts">
import type { ThemeVariable } from '@/utils/types';
import { ref } from 'vue';
import { toCamelCase } from '@/utils/formatter';
import { defaultVariables } from '@/utils/variables';

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
</script>

<template>
  <div class="uk-padding-large uk-padding-remove-horizontal uk-padding-remove-bottom">
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
