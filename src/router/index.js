import App from '../App'

export default [
	{
		path:'/hello',
		meta:{ title :'hello 首页'},
		name:'hello',
		component:(resolve) => require(['../pages/index.vue'],resolve)
	},
	{
		path:'/test',
		meta:{ title:'测试页面'},
		name:'test',
		component:(resolve) => require(['../pages/test.vue'],resolve),
		children:[
			{
				path:'test1',
				meta:{ title :'测试页面1'},
				name:'test1',
				component:(resolve) => require(['../pages/test/test1.vue'],resolve)
			},
			{
				path:'test2',
				meta:{ title :'测试页面2'},
				name:'test2',
				component:(resolve) => require(['../pages/test/test2.vue'],resolve)
			}
		]
	},
	{
		path:'*',
		redirect:'/hello'
	}
]

