// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes';
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
const router=new VueRouter({
	routes:Routes,
	mode:'history'
})
Vue.directive('theme',{
	bind(el,binding,vnode){
		if(binding.value=='wide'){
			el.style.maxWidth='800px'
		}
			}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
})
