import Vue, { VNode } from 'vue';

declare global {
    namespace JSX {
        // tslint:disable no-empty-interface
        interface Element extends VNode {}
        // tslint:disable no-empty-interface
        interface ElementClass extends Vue {}
        interface IntrinsicElements {
            [elem: string]: any;
        }
    }
    type TStore = {
        rootState?: string;
    };
    type TCounterStore = {
        counter: number;
        lastMutation: string;
        isLoading: boolean;
    };
}
