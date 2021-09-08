import { MutationTree } from 'vuex';

const mutations: MutationTree<TCounterStore> = {
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
};

export default mutations;
