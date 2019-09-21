import Vue from 'vue'
import Router from 'vue-router'
import ContactUs from '@/pages/ContactUs.vue'
import Users from '@/pages/User.vue'
import Register from '@/pages/Register.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/ContactUs',
            name: 'ContactUs',
            component: ContactUs
        },
        {
            path: '/',
            name: 'Register',
            component: Register
        },
        {
            path: '/Users',
            name: 'Users',
            component: Users
        },
    ]
})