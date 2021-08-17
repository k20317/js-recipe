<template>
  <div id="app">
    <div><FirebaseApp /></div>
    <div><ExampleApp /></div>
  </div>
</template>

<script>
import FirebaseApp from "@/components/FirebaseApp.vue"
import ExampleApp from "@/components/ExampleApp.vue"
export default {
  name: "App",
  components: {
    FirebaseApp,
    ExampleApp,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
