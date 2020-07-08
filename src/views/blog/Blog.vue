<template>
  <div>
    <route-tip-view />
    <div class="content">

      <el-row :gutter="30">
        <el-col :xs="{'span':24}" :sm="{'span':18}" :md="{'span':18}">
          <el-row :gutter="30">
            <home-article-list-item :article="item" v-for="(item, index) in list" :key="index" :type="index % 5 ===4 ? 'va' : 'vh'">
            </home-article-list-item>
          </el-row>
        </el-col>
        <el-col :xs="{'span':24}" :sm="{'span':6}" :md="{'span':6}">
          <blog-category />
          <blog-recent-blog />
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
  import Scroll from "../../components/Scroll";
  import HomeArticleListItem from "../../components/home/HomeArticleListItem";
  import ArticleAPI from "@/network/article_api";
  import RouteTipView from "../../components/RouteTipView";
  import BlogCategory from "../../components/blog/BlogCategory";
  import BlogRecentBlog from "../../components/blog/BlogRecentBlog";

  export default {
    name: "Blog",
    components: {
      Scroll,
      HomeArticleListItem,
      RouteTipView,
      BlogCategory,
      BlogRecentBlog
    },
    data() {
      return {
        page: 0,
        size: 20,
        list:[],
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
    max-width: var(--wee-max-content-width);
    margin: auto;
    padding: 40px;
    height: 100%;
  }
</style>
