import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue , IconsPlugin} from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)



Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


export async function apiFetch(url, options = {}) {
	options.headers = {
		"Content-Type": "application/json",
		"Authorization": `Token ${localStorage.getItem("token")}`,
	};
	const response = await fetch(url, options);
	if (response.status === 401) {
		router.push({ name: "login" });
	}
	return response;
}
