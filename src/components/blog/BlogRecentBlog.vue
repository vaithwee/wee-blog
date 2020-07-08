<template>
  <div class="blog-recent-content">
    <h3 style="text-align: left">最近/Recent</h3>
    <blog-recent-blog-item v-for="article in data" :article="article" />
  </div>
</template>

<script>
  import ArticleAPI from "../../network/article_api";
  import BlogRecentBlogItem from "./BlogRecentBlogItem";
  export default {
    name: "BlogRecentBlog",
    components: {
      BlogRecentBlogItem
    },
    data() {
      return {
        data: [],
      };
    },
    created() {
      ArticleAPI.getRecentArticleList().then(res => {
        this.data = res.data;
      })
    }
  }
</script>

<style scoped>
.blog-recent-content {
  margin: 50px 0;
}
</style>