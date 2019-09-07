// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import { Button, Select,Input, Row, Col,Container,Header,Main,Footer,Message} from 'element-ui';
import VueSocketIO from 'vue-socket.io'
Message.install = function (Vue, options) {
  Vue.prototype.$message = Message;
}
Vue.use(new VueSocketIO({
    debug: true,
    // 服务器端地址
    connection: 'http://localhost:9990',
    
}))


// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
/* 或写为
 * 
 */
 Vue.use(Button)
 Vue.use(Select)
 Vue.use(Input)
 Vue.use(Row)
 Vue.use(Col)
 Vue.use(Container)
 Vue.use(Header)
 Vue.use(Main)
 Vue.use(Footer)
 Vue.use(Message)

Vue.config.productionTip = false

Vue.prototype.$http=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
