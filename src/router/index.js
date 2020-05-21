import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../components/Main.vue';
import ProdsList from '../components/ProdsList.vue';
import PkgsList from '../components/PkgsList.vue';
import Vehicles from '../components/VehiclesList.vue';

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
        {
            path: '/vehicles',
            component: Vehicles,
        }
    ]
});

export default router;

