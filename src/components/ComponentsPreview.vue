<script setup lang="ts">
import DemoSection, { H3 } from './DemoSection.vue';
</script>

<template>
  <div class="uk-padding uk-padding-remove-top">
    <h1 class="uk-margin-large-top">Theme Preview</h1>
    <p class="uk-text-lead uk-text-muted">
      Explore how your custom UIkit theme looks across various components.
    </p>

    <DemoSection title="Typography">
      <h1>Heading H1</h1>
      <h2>Heading H2</h2>
      <h3>Heading H3</h3>
      <p class="uk-text-lead">Lead paragraph text for introductory content.</p>
      <p>
        Standard body text <span class="uk-text-emphasis">with emphasis text</span>.
        <a href="#">This is a link</a>. <strong>This is bold text</strong>.
        <span class="uk-text-muted">This is muted text</span>. <em>This is italic text</em>.
      </p>
      <p class="uk-text-meta">Meta text for descriptions or dates.</p>
    </DemoSection>

    <DemoSection title="Interaction">
      <H3>Button</H3>
      <div class="uk-flex">
        <button class="uk-button uk-button-default uk-margin-small-right">Default</button>
        <button class="uk-button uk-button-primary uk-margin-small-right">Primary</button>
        <button class="uk-button uk-button-secondary uk-margin-small-right">Secondary</button>
        <button class="uk-button uk-button-danger uk-margin-small-right">Danger</button>
        <button class="uk-button uk-button-text uk-margin-small-right">Text</button>
        <button class="uk-button uk-button-link">Link</button>
      </div>

      <H3>Subnav</H3>
      <ul class="uk-subnav uk-subnav-pill" uk-margin>
        <li class="uk-active"><a href="#">Active</a></li>
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
      </ul>
    </DemoSection>

    <DemoSection title="Feedback & Status">
      <H3>Alert</H3>
      <div class="uk-alert-primary" uk-alert>
        <button class="uk-alert-close" uk-close></button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>

      <div class="uk-alert-success" uk-alert>
        <button class="uk-alert-close" uk-close></button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>

      <div class="uk-alert-warning" uk-alert>
        <button class="uk-alert-close" uk-close></button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>

      <div class="uk-alert-danger" uk-alert>
        <button class="uk-alert-close" uk-close></button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>

      <H3>Label</H3>
      <span class="uk-label uk-margin-small-right">Default</span>
      <span class="uk-label uk-label-success uk-margin-small-right">Success</span>
      <span class="uk-label uk-label-warning uk-margin-small-right">Warning</span>
      <span class="uk-label uk-label-danger">Danger</span>
    </DemoSection>

    <DemoSection title="Data & Content">
      <H3>Table</H3>
      <table className="uk-table uk-table-divider uk-table-hover uk-table-small">
        <thead>
          <tr>
            <th>Component</th>
            <th>Category</th>
            <th className="uk-text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Button</td>
            <td>Forms</td>
            <td className="uk-text-right uk-text-success">Verified</td>
          </tr>
          <tr>
            <td>Alert</td>
            <td>Feedback</td>
            <td className="uk-text-right uk-text-success">Verified</td>
          </tr>
          <tr>
            <td>Table</td>
            <td>Layout</td>
            <td className="uk-text-right uk-text-warning">Testing</td>
          </tr>
        </tbody>
      </table>

      <H3>Card</H3>
      <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
        <div>
          <div className="uk-card uk-card-default uk-card-body">
            <h3 className="uk-card-title">Default Card</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <a href="#" className="uk-button uk-button-text">Read more</a>
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-primary uk-card-body uk-light">
            <h3 className="uk-card-title">Primary Card</h3>
            <p>Custom background and text colors applied here.</p>
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-secondary uk-card-body uk-light">
            <h3 className="uk-card-title">Secondary Card</h3>
            <p>Custom background and text colors applied here.</p>
            <button class="uk-button uk-button-default">Learn More</button>
          </div>
        </div>
      </div>
    </DemoSection>
  </div>
</template>
