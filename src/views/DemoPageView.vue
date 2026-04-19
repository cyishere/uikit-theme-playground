<script setup lang="ts">
import Header from '@/components/DemoPageComponents/HeaderSection.vue';
import Hero from '@/components/DemoPageComponents/HeroSection.vue';
import Services from '@/components/DemoPageComponents/ServicesSection.vue';
import Tools from '@/components/DemoPageComponents/ToolsSection.vue';
import Solution from '@/components/DemoPageComponents/SolutionSection.vue';
import ChooseService from '@/components/DemoPageComponents/ChooseService.vue';
import News from '@/components/DemoPageComponents/NewsSection.vue';
import Footer from '@/components/DemoPageComponents/FooterSection.vue';
import { themeState } from '@/utils/theme-state';
</script>

<template>
  <div class="tp-wrapper" :data-compiling="themeState.compiling">
    <Header />
    <Hero />
    <Services />
    <Tools />
    <Solution />
    <ChooseService />
    <News />
    <Footer />
  </div>
</template>
