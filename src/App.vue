<template>
  <div id="app">
    <navigation ref="nav"/>
    <router-view></router-view>

  </div>

</template>

<script>

  import Navigation from "./components/nav/Navigation";

  export default {
    name: 'App',
    components: {
      Navigation
    }
  }
</script>

<style>

  @import "assets/css/common.css";

  #app {
    --font-family-sans-serif: Roboto,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  body {
    margin: 0;
    padding: 0;
  }

  #app {
    background-color: var(--wee-background-color);
  }


</style>
