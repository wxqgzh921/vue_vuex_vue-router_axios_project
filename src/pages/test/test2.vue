<template>
	<div class="test2">
		<h1>{{ msg }}</h1>
		<router-link to="/test/test1">前往test1页面</router-link>
		<h2>Very Cool~ Do you like it ?</h2>
	</div>
</template>
<script>
	export default{
		name:'test2',
		data(){
			return {
				msg:'Welcome to Your test2 page'
			}
		}
	}
</script>