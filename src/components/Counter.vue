<template lang="pug">
.counter-container
  h1 Counter - Vuex
  h2 Direct access: {{ $store.state.counter }}
  h2 Computed: {{ countComputed }}
  h2 mapstate: {{ counter }}
  h2 lastmutation: {{ lastMutation }}
  h2 square Getter: {{ $store.getters.square }}

  button(@click="increment", :disabled="$store.state.isLoading") +1
  button(@click="incrementBy(5)", :disabled="$store.state.isLoading") +5
  button(@click="incrementByRandom", :disabled="$store.state.isLoading") Random
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState, mapActions } from "vuex";

@Component({
  computed: {
    ...mapState(["counter", "lastMutation"]),
  },

  methods: {
    ...mapActions({ randomInt: "incrementRandomInt" }),
  },
})
export default class Counter extends Vue {
  get countComputed(): number {
    return this.$store.state.counter;
  }

  increment(): void {
    this.$store.commit("increment");
  }

  incrementBy(val: number): void {
    this.$store.commit("incrementBy", val);
  }

  incrementByRandom(): void {
    this.$store.dispatch("incrementRandomInt");
  }
}
</script>