<template>
    <scroll @scroll="contentScroll" class="content">
        <section class="hero" ref="hero">
            <div class="overlay"></div>
            <div class="text">
                <h1>I'm <span class="bold">Wee</span>, I love <span class="bold">Coding</span>.</h1>
            </div>
        </section>
        <div style="background-color: red;height: 150px;"></div>
        <div style="background-color: orange;height: 150px;"></div>
        <div style="background-color: gray;height: 150px;"></div>
        <div style="background-color: brown;height: 150px;"></div>
        <div style="background-color: black;height: 150px;"></div>
        <div style="background-color: red;height: 150px;"></div>
        <div style="background-color: orange;height: 150px;"></div>
        <div style="background-color: gray;height: 150px;"></div>
        <div style="background-color: brown;height: 150px;"></div>
        <div style="background-color: black;height: 150px;"></div>
        <div style="background-color: red;height: 150px;"></div>
        <div style="background-color: orange;height: 150px;"></div>
        <div style="background-color: gray;height: 150px;"></div>
        <div style="background-color: brown;height: 150px;"></div>
        <div style="background-color: black;height: 150px;"></div>
        <div style="background-color: red;height: 150px;"></div>
        <div style="background-color: orange;height: 150px;"></div>
        <div style="background-color: gray;height: 150px;"></div>
        <div style="background-color: brown;height: 150px;"></div>
        <div style="background-color: black;height: 150px;"></div>
    </scroll>
</template>

<script>
    import Scroll from "@/components/Scroll";
    export default {
        name: "Home",
        components: {
            Scroll
        },
        mounted() {
            this.$parent.$refs.nav.changeBgColor("rgba(0,0,0,0)");
        },
        methods: {
            contentScroll(position) {
                let min = - (this.$refs.hero.offsetHeight - 87);
                if (position.y < min) {
                    this.$parent.$refs.nav.changeBgColor("rgba(0,0,0,1)");
                } else  {
                    this.$parent.$refs.nav.changeBgColor("rgba(0,0,0,0)");
                }
            }
        }
    }
</script>

<style scoped>

    .content {
        overflow: hidden;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    .hero .text {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 50vh;
        /*transform: translateY(-60%);*/
        /*-webkit-transform: translateY(-60%);*/
        /*-moz-transform: translateY(-60%);*/
        /*-o-transform: translateY(-60%);*/
        /*-ms-transform: translateY(-60%);*/
        text-align: center;
        color: white;
    }

    .overlay {
        background-color: #000;
        opacity: .85;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 50vh;
    }

    .hero {
        height: 50vh;
        background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582733231412&di=7227476d32e7ba4b649468d2c452c28c&imgtype=0&src=http%3A%2F%2Fe0.ifengimg.com%2F08%2F2019%2F0422%2F60EA3F2C3828505F80355AEF967D2A9ED2075E2D_size2392_w3543_h2362.jpeg");
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        overflow: auto;
    }

    .bold {
        font-weight: 600;
    }
    .text h1 {
        margin-top: 25vh;
    }
</style>
