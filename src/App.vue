<template>
  <div id="app">
    <navigation ref="nav"/>
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>

  import Navigation from "./components/nav/Navigation";

  export default {
    name: 'App',
    components: {
      Navigation,
    }
  }
</script>

<style>

  @import "assets/css/common.css";

  #app {
    /*--font-family-sans-serif: Roboto,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";*/
    /*--font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    text-align: center;
    font-family: Noto Sans SC;
    font-style: normal;
    font-weight: 400;
    width: 100%;
    height: 100vh;
    background-color: var(--wee-background-color);
  }

  body {
    margin: 0;
    padding: 0;
  }

  .app-content {
    position: absolute;
    top: var(--wee-nav-height);;
    bottom: 0;
    margin: auto;
    width: 100%;
    background-color: var(--wee-background-color);
  }
</style>
