<template>
  <div id="app">
     <img src="./assets/logo.png">
     <transition
        name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight"
        mode="out-in"
        >
        <router-view></router-view>
     </transition>
     <load></load>
  </div>
</template>

<script>
import 'animate.css'
import './assets/style/common.css'
import 'element-ui/lib/theme-default/message.css'
import 'element-ui/lib/theme-default/notification.css'
import load from './components/popup/load'
export default {
	  name: 'app',
    components:{
      load
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


