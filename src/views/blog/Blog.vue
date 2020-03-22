<template>
  <scroll class="content">
    <div>
      <el-row style="margin: auto;max-width: 800px;padding-top: 30px">
        <home-article-list-item v-for="(item, index) in list" :key="index" :article="item" :type="4" />
      </el-row>
    </div>
  </scroll>
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
        this.list = res.data;
      });
    },
    mounted() {
      this.$parent.$refs.nav.changeBgColor("rgba(0,0,0,1)");
    },
  }
</script>

<style scoped>
  .content {
    overflow: hidden;
    position: absolute;
    top: 87px;
    bottom: 0;
    right: 0;
    left: 0;
  }
</style>
