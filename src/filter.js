import Vue from 'vue'
import vjss from 'vuejs-storage'

Vue.use(vjss)

import $ from 'jquery'
import xf from './xfilter.vue'

const div = document.createElement('div')
const vm = new Vue({
	render: h => h(xf),
	el: div
})
$('.b-list__filter').append(
	$(div)
		.addClass('ib')
		.append(vm.$el)
)

export const filter = vm.$children[0].filter

const isLocked = el => $(el).find('.icon-lock').length > 0
const isTop = el => $(el).hasClass('b-list__row--sticky')
const isImg = el => $(el).find('.icon-photo').length > 0
export function renderList() {
	$('.b-list>tbody>.b-list__row').each((i, el) => {
		if (filter.hidelock && isLocked(el)) {
			$(el).hide()
		} else if (filter.hidetop && isTop(el)) {
			$(el).hide()
		} else if (filter.hideimg && isImg(el)) {
			$(el).hide()
		} else {
			$(el).show()
		}
	})
}
vm.$children[0].$watch('filter', { handler: renderList, deep: true })
renderList()
