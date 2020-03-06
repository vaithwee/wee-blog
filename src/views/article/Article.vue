<template>
  <scroll class="content">
    <div v-if="article">
      <el-row>
        <el-col :xs="{span:22, offset:1}" :sm="{span:18, offset:3}" :md="{span:16, offset:4}" :lg="{span:14, offset:5}"
                class="article">

          <h2 class="article-title">{{article.title}}</h2>

          <div class="article-subtitle mb-2 text-muted">by <a href="#">Wee</a> on {{createDateString}}</div>

          <div class="article-cover">
            <el-image :src="article.cover.originalURL" fit="cover">

            </el-image>
          </div>
          <div class="article-content">
            <markdown-preview :initialValue="article.content" theme="dark"/>
          </div>
        </el-col>
      </el-row>
    </div>
  </scroll>
</template>

<script>
  import Scroll from "@/components/Scroll";
  import {MarkdownPreview} from 'vue-meditor';
  import ArticleAPI from "../../network/article_api";

  export default {
    name: "BlogArticle",
    components: {
      Scroll,
      MarkdownPreview,
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
    }
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
    padding: 10px 10px;
  }
</style>
