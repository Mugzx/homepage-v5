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
			你好，<br>我是<mark>{{ appConfig.author.name }}</mark>
		</h1>
		<p class="desc">
			{{ appConfig.subtitle }}
		</p>
		<div>
			<ZButton
				icon="ph:files-duotone"
				to="https://blog.mugzx.top"
				text="博客"
				primary
			/>
			<ZButton
				icon="ph:github-logo-duotone"
				to="https://github.com/mugzx"
				text="GitHub"
			/>
		</div>
	</ZField>
	<ZField label="介绍">
		<p>
			<!-- 共青团员，但限于实践经验，并不成熟。 -->
			对前后端感兴趣，在未来也许会想成为一名全栈开发。
		</p>
	</ZField>
	<ZField label="近期活动">
		<p>
			学习 <mark>Vue</mark>，但还在学习原生基础。
		</p>
	</ZField>
	<ZField label="关于主页">
		<p>
			感谢大佬们开源的
			<ZLink to="https://github.com/L33Z22L11/homepage-v5" icon="ph:github-logo-duotone">L33Z22L11/homepage-v5</ZLink>
			个人主页。
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
