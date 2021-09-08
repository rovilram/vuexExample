const state = (): TCounterStore => ({
    counter: 1,
    lastMutation: 'none',
    isLoading: false
});

export default state;
