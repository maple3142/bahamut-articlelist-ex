export const query = Object.assign(
	...location.search
		.replace(/^\?/, '')
		.split('&')
		.map(x => x.split('='))
		.map(x => ({ [x[0]]: x[1] }))
)
export const stringify = o =>
	'?' +
	Object.keys(o)
		.map(k => `${k}=${o[k]}`)
		.join('&')
