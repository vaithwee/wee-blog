import Vue from 'vue'
import App from './App.vue'
import {Col, Icon, Image, Row, Drawer} from 'element-ui'
import router from "./router";

Vue.config.productionTip = false;

Vue.component(Col.name, Col);
Vue.component(Icon.name, Icon);
Vue.component(Image.name, Image);
Vue.component(Row.name, Row);
Vue.component(Drawer.name, Drawer);


import 'element-ui/lib/theme-chalk/index.css'

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
