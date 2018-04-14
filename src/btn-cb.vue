<template>
	<button class="btn-cb" :class="{active: value}" @click.prevent="$emit('input',!value)"><slot/></button>
</template>
<script>
export default {
	props: ['value']
}
</script>

<style scoped>
.btn-cb{
	display: inline-block;
	border: 0;
	border-radius: 3px;
	padding: 3px 12px;
	height: 25px;
	background-color: #117e96;
	color: #FFF;
	font-size: 12px;
	margin-left: 5px;
}
.btn-cb.active{
	background-color: #222e96;
}
</style>
