<script setup lang="ts">
const LINKS = [
  {
    title: 'Product',
    links: [
      {
        label: 'Features',
        href: '/'
      },
      {
        label: 'Entreprise',
        href: '/'
      },
      {
        label: 'Pricing',
        href: '/'
      },
      {
        label: 'Feature Index',
        href: '/'
      }
    ]
  },
  {
    title: 'Support',
    links: [
      {
        label: 'Documentation',
        href: '/'
      },
      {
        label: 'Changelog',
        href: '/'
      },
      {
        label: 'Community Forum',
        href: '/'
      },
      {
        label: 'Feature Requests',
        href: '/'
      },
      {
        label: 'Cookie Settings',
        href: '/'
      }
    ]
  },
  {
    title: 'Developer',
    links: [
      {
        label: 'Getting Started',
        href: '/'
      },
      {
        label: 'Learn the Basics',
        href: '/'
      },
      {
        label: 'Configurations',
        href: '/'
      },
      {
        label: 'Community',
        href: '/'
      }
    ]
  },
  {
    title: 'Company',
    links: [
      {
        label: 'About',
        href: '/'
      },
      {
        label: 'Our Story',
        href: '/'
      },
      {
        label: 'Careers',
        href: '/'
      },
      {
        label: 'Blog',
        href: '/'
      }
    ]
  }
];
</script>

<template>
  <footer class="uk-section" aria-label="Demo Footer">
    <div class="uk-padding uk-padding-remove-verical">
      <div class="uk-flex uk-flex-between uk-flex-middle">
        <div>
          <h2 class="uk-heading-small">Ready to get started?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div>
          <a href="/register" class="uk-button uk-button-primary uk-button-large"
            >Sign up for Free</a
          >
        </div>
      </div>

      <div
        class="uk-child-width-1-2 uk-child-width-1-4@s uk-child-width-1-5@m uk-margin-large-top"
        uk-grid
      >
        <div v-for="{ title, links } in LINKS" :key="title">
          <h4>{{ title }}</h4>
          <ul class="uk-nav uk-nav-default">
            <li v-for="{ label, href } in links" :key="label">
              <a :href="href">{{ label }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <div class="uk-flex">
            <a href="/" class="uk-icon-button uk-margin-small-right" uk-icon="facebook"></a>
            <a href="/" class="uk-icon-button uk-margin-small-right" uk-icon="x"></a>
            <a href="/" class="uk-icon-button uk-margin-small-right" uk-icon="github"></a>
            <a href="/" class="uk-icon-button" uk-icon="discord"></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
