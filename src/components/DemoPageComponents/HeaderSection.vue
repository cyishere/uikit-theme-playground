<script setup lang="ts">
import Logo from './PageLogo.vue';
</script>

<template>
  <nav class="tp-navbar uk-padding uk-padding-remove-top uk-padding-remove-bottom" uk-navbar>
    <div class="uk-navbar-left">
      <a class="uk-navbar-toggle uk-hidden@s" uk-navbar-toggle-icon href=""></a>
      <div class="uk-navbar-item tp-hidden_s">
        <Logo />
      </div>
    </div>

    <div class="uk-navbar-center">
      <div class="uk-navbar-item uk-hidden@s">
        <Logo />
      </div>
      <ul class="uk-navbar-nav tp-hidden_s">
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
      <div class="uk-navbar-item tp-hidden_s">
        <a href="#">Login</a>
      </div>
      <div class="uk-navbar-item tp-hidden_s">
        <a class="uk-button uk-button-primary" href="#">Register</a>
      </div>
    </div>
  </nav>
</template>
