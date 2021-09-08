import getRandomInt from '@/helpers/getRandomInt';
import { ActionTree } from 'vuex/types';

const actions: ActionTree<TCounterStore, TStore> = {
    async incrementRandomInt({ commit }) {
        commit('toggleIsLoading');
        const randomInt = await getRandomInt();
        commit('toggleIsLoading');
        commit('incrementBy', randomInt);
    }
};

export default actions;
