<template>
  <scroll @scroll="contentScroll" class="content" id="home">
    <section class="hero" ref="hero" :style="{backgroundImage:'url(' + backgroundImage +')'}">
      <div class="overlay"></div>
      <div class="text">
        <h1>不要发傻, 滚去学习!</h1>
      </div>
    </section>
    <home-article-list :list="articles"/>
    <home-testimonial/>
    <home-footer/>
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

  #home {
    --wee-home-height: 70vh;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--wee-background-color);
  }

  .hero .text {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: var(--wee-home-height);
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
    height: var(--wee-home-height);
  }

  .hero {
    min-height: var(--wee-home-height);
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    overflow: auto;
  }

  .text h1 {
    font-size: 50px;
    line-height: var(--wee-home-height);
  }

</style>
