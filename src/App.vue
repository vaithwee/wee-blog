<template>
  <div id="app">
    <navigation ref="nav"/>
    <scroll class="app-content" ref="scroll" pt="80px">
      <router-view></router-view>
      <footnote />
    </scroll>
  </div>

</template>

<script>

  import Navigation from "./components/nav/Navigation";
  import Scroll from "./components/Scroll";
  import Footnote from "./components/Footnote";

  export default {
    name: 'App',
    components: {
      Navigation,
      Scroll,
      Footnote
    },
    methods: {

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
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: var(--wee-nav-height);
    background-color: var(--wee-background-color);
    /*padding: ;*/
  }
</style>
