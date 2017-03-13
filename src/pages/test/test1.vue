<template>
	<div class="test1">
		<h1>{{ msg }}</h1>
		<router-link to="/test/test2">前往test2页面</router-link>
		<h2>Very Cool~ Do you like it ?</h2>
	</div>
</template>
<script>
	export default{
		name:'test1',
		data(){
			return {
				msg:'Welcome to Your test1 page'
			}
		}
	}
</script>