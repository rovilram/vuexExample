import { GetterTree } from 'vuex';

const getters: GetterTree<TCounterStore, TStore> = {
    square({ counter }) {
        return counter ** 2;
    }
};

export default getters;
