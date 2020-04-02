import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import app from './modules/app';
import user from './modules/user';
import permission from './modules/permission';
import freight from './modules/freight';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        user,
        permission,
        freight,
    },
    getters,
});

export default store;
