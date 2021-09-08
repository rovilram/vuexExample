import counterStore from '@/store/counter/index';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store<TStore>({
    state: {
        rootState: 'Estado root de prueba'
    },
    modules: {
        counter: counterStore
    }
});
