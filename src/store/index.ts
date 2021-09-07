import getRandomInt from '@/helpers/getRandomInt';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store<TStore>({
    state: {
        counter: 1,
        lastMutation: 'none',
        isLoading: false
    },
    mutations: {
        increment(state) {
            state.counter++;
            state.lastMutation = 'increment';
        },
        incrementBy(state, val: number) {
            state.counter += val;
            state.lastMutation = 'increment by ' + val;
        },
        toggleIsLoading(state) {
            state.isLoading = !state.isLoading;
            state.lastMutation = 'setLoading ' + state.isLoading;
        }
    },
    actions: {
        async incrementRandomInt({ commit }) {
            commit('toggleIsLoading');
            const randomInt = await getRandomInt();
            commit('toggleIsLoading');
            commit('incrementBy', randomInt);
        }
    },
    getters: {
        square({ counter }) {
            return counter ** 2;
        }
    },
    modules: {}
});
