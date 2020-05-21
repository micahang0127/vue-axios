import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../components/Main.vue';
import ProdsList from '../components/ProdsList.vue';
import PkgsList from '../components/PkgsList.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main,
        },
        {
            path: '/prods',
            component: ProdsList,
        },
        {
            path: '/pkgs',
            component: PkgsList,
        },
    ]
});

export default router;

