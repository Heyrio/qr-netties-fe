import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'





import Bulma from 'bulma/bulma.sass';


// Vue.use(Buefy, {
//     defaultIconPack: 'far',
// });
Vue.use(Bulma);
Vue.use(Buefy)



Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    data: {
        name: "App"
    }
}).$mount('#app')