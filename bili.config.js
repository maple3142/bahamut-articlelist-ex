const { version } = require('./package.json')
module.exports = {
	format: ['iife'],
	input: 'src/index.js',
	global: {
		vue: 'Vue',
		jquery: 'jQuery',
		'vuejs-storage': 'vuejsStorage'
	},
	jsx: 'vue',
	plugins: [require('rollup-plugin-vue')({ css: true })],
	postcss: {
		extract: false
	},
	banner: `
// ==UserScript==
// @name         巴哈姆特文章列表強化
// @namespace    https://blog.maple3142.net/
// @version      ${version}
// @description  強化哈拉版的文章列表
// @author       maple3142
// @require      https://unpkg.com/vue@2.5.16/dist/vue.runtime.min.js
// @require      https://unpkg.com/vuejs-storage@2.2.5/dist/vuejs-storage.min.js
// @match        https://forum.gamer.com.tw/B.php?*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==`
}
