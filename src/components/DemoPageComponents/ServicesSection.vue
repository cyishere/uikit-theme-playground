<script setup lang="ts">
import BigBox from './Icons/BigBox.vue';
import BigClip from './Icons/BigClip.vue';
import BigCog from './Icons/BigCog.vue';
import BulbIcon from './Icons/BulbIcon.vue';
import InfinityIcon from './Icons/InfinityIcon.vue';
import PlusIcon from './Icons/PlusIcon.vue';
</script>

<template>
  <section class="uk-section">
    <div class="uk-container uk-text-center">
      <h2 class="uk-heading-small">How does it work?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod, lorem ipsum dolor
        sit amet.
      </p>

      <div class="uk-child-width-expand@s uk-text-center uk-margin-xlarge-top" uk-grid>
        <div>
          <div class="uk-inline">
            <BigClip />
            <PlusIcon
              class-name="uk-text-primary uk-position-bottom-right"
              width="120"
              height="120"
            />
          </div>
          <h3>Integrate</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <a href="">Learn More <span uk-icon="arrow-right"></span></a>
        </div>
        <div>
          <div class="uk-inline">
            <BigBox />
            <InfinityIcon
              class-name="uk-text-primary uk-position-bottom-right"
              width="120"
              height="120"
            />
          </div>
          <h3>Automate</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <a href="">Learn More <span uk-icon="arrow-right"></span></a>
        </div>
        <div>
          <div class="uk-inline">
            <BigCog />
            <BulbIcon
              class-name="uk-text-primary uk-position-bottom-right"
              width="120"
              height="120"
            />
          </div>
          <h3>Innovate</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <a href="">Learn More <span uk-icon="arrow-right"></span></a>
        </div>
      </div>
    </div>
  </section>
</template>
