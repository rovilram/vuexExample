import { Module } from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

const counterStore: Module<TCounterStore, TStore> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

export default counterStore;
