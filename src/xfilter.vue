<template>
	<div class="ib">
		<btn-cb v-model="filter.hidelock">隱藏鎖文</btn-cb>
		<btn-cb v-model="filter.hidetop">隱藏置頂</btn-cb>
		<btn-cb v-model="filter.hideimg">隱藏有圖片的文章</btn-cb>
	</div>
</template>
<script>
import btnCb from './btn-cb.vue'
export default {
	data() {
		return {
			filter: {
				hidelock: false,
				hidetop: false,
				hideimg: false
			}
		}
	},
	storage: {
		namespace: 'x_filter',
		keys: ['filter'],
		storage: {
			setItem: GM_setValue,
			getItem: GM_getValue
		}
	},
	components: {
		btnCb
	}
}
</script>
