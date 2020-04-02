import Vue from 'vue';

import 'normalize.css/normalize.css';
// 引入 ElementUI 自定义主题
import '../theme/index.css';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss'; // global css

import App from './App';
import store from './store';
import router from './router';

import '@/permission'; // permission control

import { formatTime, moneyFormat, costPriceFormat } from '@/utils/';

// import VueClipboard from 'vue-clipboard2';
// Vue.use(VueClipboard)

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$moneyFormat = moneyFormat;
Vue.prototype.$formatTime = formatTime;
Vue.prototype.$costPriceFormat = costPriceFormat;
Vue.prototype.$currentDomain = process.env.VUE_APP_BASE_API; //当前域名
Vue.prototype.userImagePath = 'http://profile.maiduocbd.com/'; // 图片资源cdn地址
Vue.prototype.currentImagePath = 'http://static.maiduocbd.com/';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
