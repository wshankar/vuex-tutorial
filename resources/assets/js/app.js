require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routes} from './routes';
import MainApp from './components/MainApp';
import StoreData from './store';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
        routes,
        mode: 'history'
});

const store = new Vuex.Store(StoreData);

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const currentUser = store.state.currentUser;
    if (requiresAuth && !currentUser) {
        next('/login')
    }else if(to.path == '/login' && currentUser){
        next('/')
    }else{
        next()
    }
});


const app = new Vue({
    el: '#app',
    router,
    store,
    components: { MainApp }
});
