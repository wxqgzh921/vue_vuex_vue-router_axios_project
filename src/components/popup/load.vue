<template>
	<div class="loading-box" v-show="loadContent != ''" @touchmove="prevent" @mousewheel="prevent">
    <div class="loading-css3">
      <div class="loader"></div>
      <div>{{ loadContent }}</div>
    </div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
	name:'load',
	methods:{
	    prevent:function(e){
	      e.preventDefault()
	      e.stopPropagation()
	    }
	},
	computed:{
		...mapGetters({
			loadContent :'popup/loading/loadContent'
		})
	}
}
</script>

<style scoped>
  .loading-box{position:fixed;top:0;left:0;bottom:0;right:0;z-index:2001;width:100%;text-align:center; background: rgba(255, 255, 255, 0.9);}
  .loading-css3{position:absolute;top:50%;left:50%;transfrom:translate(-50%,-50%);}
  .loading-css3 .loader{position:relative; border:4px solid #ccc; border-right-color:#f07c00;border-radius:50%;display:inline-block; -webkit-animation:loading 0.6s linear infinite; z-index:2;}
  .loading-box .loader,
  .loading-box .loader:after {
    width: 3em;
    height: 3em;
    margin: 0 auto .125rem auto;
    border-radius: 50%;
  }
  @keyframes loading{
      0%{
        -webkit-transform:rotate(0deg);
        transform:rotate(0deg);
      }
      100%{
        -webkit-transform:rotate(360deg);
        transform:rotate(360deg);
      }
  }
  @-webkit-keyframes loading{
      0%{
        -webkit-transform:rotate(0deg);
        transform:rotate(0deg);
      }
      100%{
        -webkit-transform:roate(360deg);
        transform:rotate(360deg);
      }
  }
</style>

