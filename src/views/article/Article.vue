<template>
  <div class="content">

    <el-row :gutter="30">
      <el-col :xs="{'span':24}" :sm="{'span':18}" :md="{'span':18}">
        <div v-if="article" >
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
      </el-col>
      <el-col :xs="{'span':24}" :sm="{'span':6}" :md="{'span':6}">
        <blog-category />
        <blog-recent-blog />
      </el-col>
    </el-row>


  </div>
</template>

<script>
  import Scroll from "@/components/Scroll";
  import markdown from "@/components/markdown/preview"
  import ArticleAPI from "../../network/article_api";
  import BlogRecentBlog from "../../components/blog/BlogRecentBlog";
  import BlogCategory from "../../components/blog/BlogCategory";

  export default {
    name: "BlogArticle",
    components: {
      Scroll,
      markdown,
      BlogRecentBlog,
      BlogCategory
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
    margin: auto;
    max-width: var(--wee-max-content-width);
    /*position: absolute;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*right: 0;*/
    /*left: 0;*/
    /*text-align: left;*/
    background-color: white;
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
    /*max-height: 400px;*/
    overflow: hidden;
  }

  .article-content {
    text-align: left;
    /*padding-bottom: 30px;*/
    background-color: white;
    padding: 40px;
  }
</style>
