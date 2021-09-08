<template lang="pug">
.counter-container
  h1 Counter - Vuex
  h2 Direct access: {{ $store.state.counter.counter }}
  h2 Computed: {{ countComputed }}
  h2 mapstate: {{ counter }}
  h2 lastmutation: {{ lastMutation }}
  h2 square Getter: {{ $store.getters['counter/square'] }}

  button(@click="increment", :disabled="$store.state.counter.isLoading") +1
  button(@click="incrementBy(5)", :disabled="isLoading") +5
  button(@click="incrementByRandom", :disabled="isLoading") Random
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState, mapActions } from "vuex";

@Component({
  computed: {
    ...mapState("counter", {
      counter: "counter",
      lastMutation: "lastMutation",
      isLoading: "isLoading",
    }),
  },

  methods: {
    ...mapActions("counter", { randomInt: "incrementRandomInt" }),
  },
})
export default class Counter extends Vue {
  get countComputed(): number {
    return this.$store.state.counter.counter;
  }

  increment(): void {
    this.$store.commit("counter/increment");
  }

  incrementBy(val: number): void {
    this.$store.commit("counter/incrementBy", val);
  }

  incrementByRandom(): void {
    this.$store.dispatch("counter/incrementRandomInt");
  }
}
</script>