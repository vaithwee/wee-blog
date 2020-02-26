<template>
    <div id="app">

        <navigation background-color="rgba(0,0,0,0)" ref="nav" />

        <router-view>

        </router-view>

<!--                <el-image-->
<!--                        class="backgroundImage"-->
<!--                        fit="cover"-->
<!--                        src="http://demo.cssmoban.com/cssthemes6/quar_11_stisla/img/hero.jpeg">-->
<!--                </el-image>-->

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

    }


</style>
