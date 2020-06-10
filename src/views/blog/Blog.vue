<template>
  <div class="content">
    <el-row :gutter="30">
      <el-col :xs="{'span':24}" :sm="{'span':6, 'push':18}" :md="{'span':6,'push':18}">
        <p>category</p>
      </el-col>
      <el-col :xs="{'span':24}" :sm="{'span':18, 'pull':6}" :md="{'span':18, 'pull':6}">
        <el-row :gutter="30">
          <home-article-list-item :article="item" v-for="(item, index) in list" :key="index" :type="index % 5 ===4 ? 'va' : 'vh'">
          </home-article-list-item>
        </el-row>
      </el-col>


    </el-row>
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
    padding: 10px;
    /*overflow: hidden;*/
    /*position: absolute;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*right: 0;*/
    /*left: 0;*/
    height: 100%;
  }
</style>
