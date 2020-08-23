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


const app = new Vue({
    el: '#app',
    router,
    store,
    components: { MainApp }
});
