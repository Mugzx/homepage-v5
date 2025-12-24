<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
<NuxtImg class="icon" :src="appConfig.faviconOld" :alt="`${appConfig.title}的图标`" />
</template>

<!-- eslint-disable-next-line vue/block-lang -->
<style scoped>
.icon {
	width: 1.5em;
	vertical-align: middle;
}
</style>
