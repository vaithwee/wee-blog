<template>
  <scroll class="content">
    <div>
      <el-row>
        <el-col :xs="{span:22, offset:1}" :sm="{span:18, offset:3}" :md="{span:16, offset:4}" :lg="{span:12, offset:6}">
          <home-article-list-item v-for="(item, index) in list" :key="index" :article="item" />

        </el-col>
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
