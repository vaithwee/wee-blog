<template>
  <scroll class="content">
    <div>
      <el-row>
        <el-col :xs="{span:22, offset:1}" :sm="{span:18, offset:3}" :md="{span:16, offset:4}" :lg="{span:10, offset:6}">
          <home-article-list-item></home-article-list-item>
          <home-article-list-item></home-article-list-item>
          <home-article-list-item></home-article-list-item>
          <home-article-list-item></home-article-list-item>
          <home-article-list-item></home-article-list-item>
          <home-article-list-item></home-article-list-item>
          <home-article-list-item></home-article-list-item>

        </el-col>
      </el-row>
    </div>
  </scroll>
</template>

<script>
    import Scroll from "../../components/Scroll";
    import HomeArticleListItem from "../../components/home/HomeArticleListItem";
    export default {
        name: "Blog",
        components: {
            Scroll,
            HomeArticleListItem,
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