<script setup lang="ts">
import { ref } from 'vue';
import PreviewCanvas from '../components/PreviewCanvas.vue';
import Sidebar from '../components/SideBar.vue';
import Toolbar from '../components/ToolBar.vue';
import ThemeController from '../components/ThemeController.vue';

const compiling = ref(false);
</script>

<template>
	<div class="tp-wrapper" :data-compiling="compiling">
		<Sidebar>
			<ThemeController v-model:compiling="compiling" />
		</Sidebar>
		<main class="tp-main">
			<Toolbar v-model:compiling="compiling">
				<ThemeController v-model:compiling="compiling" />
			</Toolbar>
			<PreviewCanvas />
		</main>
	</div>
</template>

<style scoped>
.tp-wrapper {
	display: flex;
	justify-content: flex-start;
	align-items: stretch;
}

.tp-main {
	flex: 1;
}
</style>
