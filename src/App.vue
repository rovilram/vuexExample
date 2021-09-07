<template lang="pug">
#app
  .container
    p me cago en tó
    Counter
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Counter from "./components/Counter.vue";
@Component({
  components: { Counter },
})
export default class App extends Vue {}
</script>