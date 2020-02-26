<template>
  <div id="app">
    <navigation background-color="rgba(0,0,0,0.85)" ref="nav"/>
    <router-view>
    </router-view>
  </div>
</template>

<script>

    import Navigation from "./components/Navigation";

    export default {
        name: 'App',
        components: {
            Navigation
        }
    }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  body {
    margin: 0;
    padding: 0;
  }

  #app {
    display: flex;
  }


</style>
