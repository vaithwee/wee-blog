<template>
  <div class="content">
    <ul >
      <li v-for="i in 200" class="infinite-list-item">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
  import Scroll from "../../components/Scroll";
  import HomeArticleListItem from "../../components/home/HomeArticleListItem";
  import ArticleAPI from "@/network/article_api";

  export default {
    name: "Blog",
    components: {
      Scroll,
      HomeArticleListItem,
    },
    data() {
      return {
        page: 0,
        size: 20,
        list:[]
      }
    },
    created() {
      ArticleAPI.getArticleList(this.page, this.size).then(res => {
        this.list = res.data.data;
      });
    },
    mounted() {
      this.$parent.$refs.nav.changeTransparent(false);
    },
  }
</script>

<style scoped>
  .content {
    max-width: 1024px;
    margin: auto;
    /*overflow: hidden;*/
    /*position: absolute;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*right: 0;*/
    /*left: 0;*/
    height: 100%;
  }
</style>
