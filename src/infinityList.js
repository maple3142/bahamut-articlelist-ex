import { query, stringify } from './utils'
import $ from 'jquery'
import { renderList } from './filter'

let firstpage = Math.max(query.page ? parseInt(query.page) : 1, 1)
let lastpage = firstpage
const $firstrow = $('<tr>').addClass('b-list__row')
const $lastrow = $('<tr>').addClass('b-list__row')
$('.b-list>tbody').append($lastrow)
$('.b-list__head').after($firstrow)
const existsTable = {}
$('.b-list>tbody>.b-list__row')
	.find('a[name]')
	.map((i, e) => $(e).attr('name'))
	.each((i, x) => (existsTable[x] = true))
function xLoadFac(next) {
	return $('<div>')
		.addClass('load-more')
		.text('載入更多')
		.click(e => {
			if (!next && firstpage === 1) {
				alert('已到首頁')
				return
			}
			if (next) lastpage++
			else firstpage--
			const q = location.pathname + stringify(Object.assign({}, query, { page: next ? lastpage : firstpage }))
			history.pushState(null, '', q)
			fetch(q)
				.then(r => r.text())
				.then(h => {
					// POST LIST
					const x = $(h)
						.find('.b-list>tbody>.b-list__row')
						.filter((i, e) => {
							const a = $(e).find('.b-list__summary__sort a[data-subbsn]:last')
							if (a.length) {
								a.text(subtitle(a.data('subbsn')))
							}
							const id = $(e)
								.find('a[name]')
								.attr('name')
							if (existsTable[id]) return false
							else return (existsTable[id] = true)
						})
					if (next) $lastrow.before(x)
					else $firstrow.after(x)
					renderList() //rerender

					// PAGER
					const $oldpager = $('.b-pager')
					const $newpager = $(h).find('.b-pager')
					if (next) $oldpager.eq(1).replaceWith($newpager.eq(1))
					else $oldpager.eq(0).replaceWith($newpager.eq(0))
				})
		})
}
$('.b-list')
	.before(xLoadFac(false))
	.after(xLoadFac(true))
