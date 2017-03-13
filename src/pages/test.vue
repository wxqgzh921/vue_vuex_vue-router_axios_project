<template>
	<div class="test">
		<h1>{{ msg }}</h1>
		<router-link to="/hello">前往首页（返回hello页面）</router-link>
		<h2>--------测试嵌套路由，常用于导航--------</h2>
		<router-link to="/test/test1">前往test1页面</router-link>
    	<router-link to="/test/test2">前往test2页面</router-link>
    	<h2>--------测试Axios获取数据，打开控制台看效果哦--------</h2>
    	<a @click="searchGithub" style="cursor:pointer;">Click this to test Axios</a>
    	<h2>--------测试 Modal组件（用到vuex控制状态）--------</h2>
	    <a @click="showModal" style="cursor: pointer;">Click this to show Modal</a>
	    <h2>--------测试 ElementUI-Message--------</h2>
	    <a @click="testMessage" style="cursor: pointer;">Click this to test message</a>
	    <h2>--------测试 ElementUI-Notify--------</h2>
	    <a @click="testNotify" style="cursor: pointer;">Click this to test notify</a>

	    <transition 
	    	name="custom-classes-transition"
	    	enter-active-class="animated tada"
	    	leave-active-class="animated bounceOutRight"
	    	mode="out-in"
	    	>
	    	<router-view></router-view>
	    </transition>

	    <modal>
	    	<div class="test-modal">
	    		<h3>Hello modal</h3>
	    	</div>
	    </modal>


	</div>
</template>

<script>
import { mapActions , mapGetters } from 'vuex'
import modal from '../components/popup/modal'
	export default{
		name:'test',
		components:{
			modal
		},
		data(){
			return{
				msg:'Welcome to Your Vue.js App -- test page',
				time:'2016-05-05 20:10:10'
			}
		},
		methods:{
			...mapActions({
				showModal:'popup/modal/showModal'
			}),
			searchGithub(){
				this.$http.get('/')
				.then((response)=>{
					console.log(response);
				})
				.catch((error)=>{
					console.log(error);
				});
			},
			testMessage(){
				let types =[{ type:'success',message:'恭喜你，这是一条成功消息'},{type:'warning',message:'警告哦，这是一条警告消息'},{type:'error',message:'错了哦，这是一条错误消息'},{type:'info',message:'这是一条消息提示'}]
				let typeindex = parseInt(Math.random()*4)
				this.$message({
					showClose: true,
		        	message: types[typeindex].message,
		        	type: types[typeindex].type
		        });
			},
			testNotify() {
			    let type = ['info', 'success', 'warning', 'error']
			    let typeInt = parseInt(Math.random()*4)
			    const h = this.$createElement;
			    this.$notify({
			        title: '标题',
			        message:  h('p',{ style: 'color: red'},'这是一条提示消息'),
			        type: type[typeInt]
			    });
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
  display: inline-block;
  color: #42b983;
  padding: 0 10px;
}

.test-modal{
  background-color: #fff;
  padding: 50px 200px
}
</style>
