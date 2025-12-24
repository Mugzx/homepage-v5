// 存储 nuxt.config 和 app.config 共用的配置

import type { NitroConfig } from 'nitropack'

const author = {
	name: 'Mugzx',
	avatar: 'https://wsrv.nl/?url=github.com/mugzx.png&output=webp',
	email: 'me@mugzx.top',
	homepage: 'https://www.mugzx.top',
}

const homepageConfig = {
	title: 'Mugzx (@Mugzx)',
	subtitle: '向上革命，向下实践。',
	description: 'Mugzx 是一名在学习马克思列宁主义的学生，这是他的个人主页。该个人主页简洁美观，为读者提供了卓越的阅读体验。',
	author,
	language: 'zh-CN',
	timezone: 'Asia/Shanghai',
	favicon: 'https://www.gstatic.cn/android/keyboard/emojikitchen/20201001/u1f30d/u1f30d_u2601-ufe0f.png',
	url: 'https://www.mugzx.top',
	blogAtom: 'https://blog.mugzx.top/atom.xml',
}

// https://nitro.build/config#routerules
export const routeRules: NitroConfig['routeRules'] = {
	'/api/avatar.png': { redirect: author.avatar },
	'/api/icon.png': { redirect: homepageConfig.favicon },
	'/favicon.ico': { redirect: homepageConfig.favicon },
}

export default homepageConfig
