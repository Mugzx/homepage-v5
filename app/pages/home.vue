<script setup lang="ts">
useHead({ title: '' })
definePageMeta({
	alias: ['/'],
	title: '主页',
})
const appConfig = useAppConfig()
</script>

<template>
<ZhiluAvatar class="avatar" />
<div class="wrapper">
	<ZField>
		<template #label>
			<span style="font-size: 3rem;">👋</span>
		</template>
		<h1 style="font-size: 3rem;">
			你好，<br>我是 <mark>{{ appConfig.author.name }}</mark>
		</h1>
		<p class="desc">
			{{ appConfig.subtitle }}
		</p>
		<div>
			<ZButton
				icon="ri:file-list-3-line"
				to="https://blog.mugzx.top"
				text="博客"
				primary
			/>
			<ZButton
				icon="ri:github-line"
				to="https://github.com/mugzx"
				text="GitHub"
			/>
		</div>
	</ZField>
	<ZField label="介绍">
		<p>
			高中生，热爱马哲与编程，喜欢不断折腾。
		</p>
	</ZField>
	<ZField label="近期活动">
		<p>
			菜就多练。
		</p>
	</ZField>
	<ZField label="关于主页">
		<p>
			感谢大佬们开源的
			<ZLink to="https://github.com/L33Z22L11/homepage-v5" icon="ri:github-line">L33Z22L11/homepage-v5</ZLink>
			。
		</p>
		<p>
			主页样式参考：<br>
			<ZBadge v-for="item in appConfig.fork" :key="item.link" v-bind="item" />
		</p>
	</ZField>
</div>
</template>

<style lang="scss" scoped>
.avatar {
	position: fixed;
	opacity: 0.2;
	top: 0;
	right: 20vw;
	margin-right: -0.4em;
	font-size: min(100vw, 60vh);
	z-index: -1;
}

.desc {
	margin: 1rem 0;
	font-size: 1.5rem;
	color: var(--c-text-2);
}
</style>
