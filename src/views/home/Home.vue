<template>
    <div>
        <section class="hero bg-overlay" id="hero">
            <div class="text">
                <p class="lead">Fully responsive HTML5 &amp; CSS3 template</p>
                <h1>I'm <span class="bold">stisla</span>, based on <span class="bold">Bootstrap 4</span>.</h1>
                <div class="cta">
                    <a href="#features" class="btn btn-primary smooth-link">Get Started</a>
                    <div class="link">
                        <a href="#">Under the MIT License</a>
                    </div>
                </div>
            </div>
            <div class="overlay"></div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Home",
        mounted() {
            this.$parent.$refs.nav.backgroundColor = "red";
        }
    }
</script>

<style scoped>
    .backgroundImage {
        display: flex;
        position: relative;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }




    #content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000;
        opacity: 0.85;
    }



    li {
        /*background-color: white;*/
        color: white;
    }

    section.bg-overlay {
        background-color: rgba(0,0,0,0.85);
    }

    .overlay {
        background-color: #000;
        opacity: .85;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .hero {
        height: 100vh;
        width: 100%;
        color: #fff;
        position: relative;
        background-image: url("http://demo.cssmoban.com/cssthemes6/quar_11_stisla/img/hero.jpeg");
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
    }

    .text {
        color: white;
    }
</style>