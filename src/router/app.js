export default {
    routes: [{
        path: '/Login',
        name: 'login',
        component: resolve => require(['modules/Login.vue'], resolve),
        meta: {
            tokenrequired: false
        }
    },
    {
        path: '/Register',
        name: 'register',
        component: resolve => require(['modules/Register.vue'], resolve),
        meta: {
            tokenrequired: false
        }
    }
    // {
    //     path: 'Dashboard',
    //     name: 'dashboard',
    //     component: resolve => require(['modules/Dashboard.vue'], resolve),
    //     meta: {
    //         tokenrequired: true
    //     }
    ]
}








