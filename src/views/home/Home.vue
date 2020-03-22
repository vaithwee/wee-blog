<template>
  <scroll @scroll="contentScroll" class="content">
    <section class="hero" ref="hero" :style="{backgroundImage:'url(' + backgroundImage +')'}">
      <div class="overlay"></div>
      <div class="text" >
        <h1 v-html="greeting"></h1>
      </div>
    </section>



    <home-article-list :list="articles"/>
    <home-testimonial />
    <home-footer />
  </scroll>
</template>

<script>
  import Scroll from "@/components/Scroll";
  import HomeArticleList from "@/components/home/HomeArticleList";
  import HomeTestimonial from "@/components/home/HomeTestimonial";
  import HomeAPI from "@/network/home_api";
  import HomeFooter from "@/components/home/HomeFooter";

  export default {
    name: "Home",
    components: {
      HomeFooter,
      HomeTestimonial,
      Scroll,
      HomeArticleList
    },
    data() {
      return {
        greeting: null,
        backgroundImage: null,
        articles: [],
      }
    },
    created() {
      HomeAPI.getHomeInfo().then(res => {
        console.log(res);
        this.greeting = res.data.info.greeting;
        this.backgroundImage = res.data.info.cover.originalURL;
        this.articles = res.data.blog;
      });
    },
    mounted() {
      this.$parent.$refs.nav.changeBgColor("rgba(0,0,0,0)");

    },
    methods: {
      contentScroll(position) {
        let min = -(this.$refs.hero.offsetHeight - 87);
        if (position.y < min) {
          this.$parent.$refs.nav.changeBgColor("rgba(0,0,0,1)");
        } else {
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
    min-height: 400px;
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
    min-height: 400px;
  }

  .hero {
    height: 50vh;
    min-height: 400px;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    overflow: auto;
  }

  .bold {
    font-weight: 600;
  }

  .text h1 {
    /*margin-top: 25vh;*/
    font-size: 40px;
    line-height: 400px;
  }

  .list-item {
    display: flex;
    display: -webkit-flex;
    width: 100%;
    text-align: left;
  }

  .icon {
    flex: 0 0 65px;
    -webkit-flex: 0 0 65px;
    font-size: 45px;
    line-height: 0;
    color: #ccc;
  }

  .desc {
    flex: 1;
    -webkit-flex: 1;
  }

  .list-item .desc h2 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: .5px;
    margin-bottom: 10px;
    font-family: inherit;
    line-height: 1.1;
  }

  .list-item .desc p {
    line-height: 28px;
    font-size: 16px;
    margin-bottom: 0;
  }

  .list-item .desc .more {
    display: inline-block;
    margin-top: 10px;
  }

</style>
