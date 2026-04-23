<script setup lang="ts"></script>

<template>
  <div>
    <div class="uk-padding uk-padding-remove-top">
      <div class="uk-flex uk-flex-between uk-flex-bottom">
        <h1 class="uk-margin-large-top">Demo Page Preview</h1>
        <a href="/demo-page" class="uk-button uk-button-secondary uk-margin-bottom" target="_blank">
          <span class="uk-margin-small-right">Preview in new tab</span>
          <span uk-icon="link-external" aria-hidden="true"></span>
        </a>
      </div>
      <p class="uk-text-lead uk-text-muted">
        Explore how your custom UIkit theme looks in an actual page.
      </p>
      <hr />
    </div>

    <div class="uk-padding uk-padding-remove-top tp-preview-frame">
      <figure class="uk-background-muted">
        <iframe
          class="uk-width-1-1 uk-margin-auto uk-resize"
          src="/demo-page"
        ></iframe>
      </figure>
    </div>
  </div>
</template>

<style scoped>
.tp-preview-frame {
  figure {
    border: 1px solid #e5e5e5;
  }

  iframe {
    display: block;
    height: 65svh;
    overscroll-behavior: contain;
  }
}
</style>
