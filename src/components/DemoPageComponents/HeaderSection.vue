<script setup lang="ts">
import Logo from './PageLogo.vue';
</script>

<template>
  <nav
    class="tp-navbar uk-padding uk-padding-remove-top uk-padding-remove-bottom"
    uk-navbar
    aria-label="Demo Navigation"
  >
    <div class="uk-navbar-left">
      <button
        class="uk-navbar-toggle uk-hidden@m"
        uk-navbar-toggle-icon
        aria-label="Open demo mobile menu"
      ></button>
      <div class="uk-navbar-item tp-hidden_m">
        <Logo />
      </div>
    </div>

    <div class="uk-navbar-center">
      <div class="uk-navbar-item uk-hidden@m">
        <Logo />
      </div>
      <ul class="uk-navbar-nav tp-hidden_m">
        <li>
          <a href="#">Why DevStack?</a>
        </li>
        <li>
          <a href="#">Enterprise</a>
        </li>
        <li><a href="#">Pricing</a></li>
        <li>
          <a href="#">Developers</a>
        </li>
        <li>
          <a href="#">Company</a>
        </li>
      </ul>
    </div>

    <div class="uk-navbar-right">
      <div class="uk-navbar-item tp-hidden_m">
        <a href="#">Login</a>
      </div>
      <div class="uk-navbar-item tp-hidden_m">
        <a class="uk-button uk-button-primary" href="#">Register</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media (max-width: 960px) {
  .tp-hidden_m {
    display: none;
  }
}
</style>
