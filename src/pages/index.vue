<template>
	<div class="index">
		<h1> {{ msg }}</h1>
		<router-link to="/test">前往test页面测试路由</router-link>
	</div>
</template>

<script>
export default {
	name:'index',
	data(){
		return{
			msg:'welcome to your vue.js project',
			testimgsrc: ''
		}
	}
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>