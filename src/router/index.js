import Vue from 'vue';
import VueRouter from 'vue-router';
import ProdsList from '../components/ProdsList.vue';
import Main from '../components/Main.vue';

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
    ]
});

export default router;

