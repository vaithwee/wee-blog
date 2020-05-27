<template>
  <scroll class="content">
    <div v-if="article" style="max-width: 1024px;min-height:100%;margin: auto;text-align: left">
      <h1 class="article-title">{{article.title}}</h1>

      <div class="article-subtitle mb-2 text-muted">by <a href="#">Wee</a> on {{createDateString}}</div>

      <div class="article-cover">
        <el-image :src="article.cover.originalURL" fit="cover">

        </el-image>
      </div>
      <div class="article-content">
        <markdown :initialValue="article.content" theme="oneDark"/>
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from "@/components/Scroll";
  import markdown from "@/components/markdown/preview"
  import ArticleAPI from "../../network/article_api";

  export default {
    name: "BlogArticle",
    components: {
      Scroll,
      markdown,
    },
    data() {
      return {
        article: null,
      }
    },
    created() {
      let id = this.$route.params.id;
      ArticleAPI.getArticleDetail(id).then(res => {
        this.article = res.data;
      })
    },
    computed: {
      createDateString() {
        let date = new Date(this.article.createDate);
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDay();
        return month + "月 " + day + "日, " + year;
      }
    },
    mounted() {
      this.$parent.$refs.nav.changeTransparent(false);
    },
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
    text-align: left;
    background-color: #f9f9f9;
  }

  .article {
    background-color: white;
    padding: 10px 20px;
    margin-top: 20px;
  }

  .article-title {
    color: #000;
    text-decoration: none;
    padding-top: 30px;
  }

  .article-subtitle {
    font-size: 14px;
    color: #666;
  }

  .article-subtitle a {
    color: #666;
    border-bottom: 1px dotted #666;
    text-decoration: none;
  }

  .article-cover {
    margin-top: 30px;
    max-height: 400px;
    overflow: hidden;
  }

  .article-content {
    text-align: left;
    /*padding-bottom: 30px;*/
    background-color: white;
    padding: 20px;
  }
</style>
