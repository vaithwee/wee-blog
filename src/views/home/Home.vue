<template>
  <scroll @scroll="contentScroll" class="content" id="home">
    <section class="hero" ref="hero">
      <!--      <div class="overlay"></div>-->
      <div class="text">
        <div class="greeting-bg">
          <div class="greeting-content">
            <span>{{greeting}}</span> <br>
            <span>不要发傻, 滚去学习!</span>
          </div>
        </div>


      </div>
    </section>
    <home-article-list :list="articles"/>
    <!--    <home-testimonial/>-->
    <!--    <home-footer/>-->
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
        this.$refs.hero.setAttribute('style', 'background-image:url(' + res.data.info.cover.originalURL + ')')
      });
    },
    mounted() {
      this.$parent.$refs.nav.changeTransparent(true);

    },
    methods: {
      contentScroll(position) {
        let min = -(this.$refs.hero.offsetHeight - 87);
        if (position.y < min) {
          this.$parent.$refs.nav.changeTransparent(false);
        } else {
          this.$parent.$refs.nav.changeTransparent(true);
        }
      }
    }
  }
</script>

<style scoped>

  #home {
    --wee-home-height: 50vh;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: -80px;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--wee-background-color);
  }

  .hero .text {
    height: var(--wee-home-height);
    text-align: center;
    color: white;
    /*width: 100%;*/
    max-width: var(--wee-max-content-width);
    /*background-color: red;*/
    margin: auto;
  }

  .hero {
    min-height: var(--wee-home-height);
    background-position: center;
    /*background-attachment: fixed;*/
    background-size: cover;
    /*overflow: auto;*/
  }

  .text h1 {
    /*font-size: 50px;*/
    color: black;
    /*line-height: var(--wee-home-height);*/
  }

  .text p {
    color: black;
  }

  .text span {
    font-weight: bold;
    color: black;
  }

  .greeting-bg {
    /*position: absolute;*/
    /*top: 25vh;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    width: 100%;
    padding-top: 35vh;
    height: 15vh;
    max-width: 550px;
    /*background-color: white;*/
  }

  .greeting-content {
    background-color: white;height: 25vh;
    padding: 2em;
    text-align: left;
  }

</style>
