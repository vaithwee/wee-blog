<template>
  <div class="content">
    <div class="footer">
      <el-row :gutter="30">
        <el-col :xs="{'span':24}" :sm="{'span':6}" :md="{'span':6}">
          <div>
            <h2 class="footer-title">NAVIGATIONAL</h2>
            <ul class="footer-nav">
              <li><a href="#"><i class="el-icon-check"></i>首页</a></li>
              <li><a href="#"><i class="el-icon-check"></i>博客</a></li>
              <li><a href="#"><i class="el-icon-check"></i>联系</a></li>
              <li><a href="https://github.com/vaithwee"><i class="el-icon-check"></i>Github</a></li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="{'span':24}" :sm="{'span':6}" :md="{'span':6}">
          <h2 class="footer-title">RECENT BLOG</h2>
          <blog-recent-blog-item v-for="article in recent" :article="article" title-color="fea00f" />
        </el-col>
        <el-col :xs="{'span':24}" :sm="{'span':6}" :md="{'span':6}">
<!--          <blog-recent-blog/>-->
        </el-col>
        <el-col :xs="{'span':24}" :sm="{'span':6}" :md="{'span':6}">
<!--          <blog-recent-blog/>-->
        </el-col>
      </el-row>
      <div class="copyright">
        <small class="block">
          Copyright &copy;2020 All rights reserved | This template is made with <i class="icon-heart"
                                                                                   aria-hidden="true"></i> by <a
                href="https://colorlib.com" target="_blank">Colorlib</a>
        </small>
        <small>
          <a href="http://www.beian.miit.gov.cn/"> | 闽ICP备19005407号-1</a>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
  import BlogRecentBlog from "./blog/BlogRecentBlog";
  import ArticleAPI from "../network/article_api";
  import BlogRecentBlogItem from "./blog/BlogRecentBlogItem";

  export default {
    name: "Footnote",
    components: {
      BlogRecentBlog,
      BlogRecentBlogItem
    },
    data() {
      return {
        recent:[]
      };
    },
    created() {
      ArticleAPI.getRecentArticleList().then(res => {
        this.recent = res.data;
      })
    }
  }
</script>

<style scoped>

  .content {
    background: #212121;
    min-height: 650px;
  }

  .footer {
    max-width: var(--wee-max-content-width);
    margin: auto;
    padding: 100px 40px;
    text-align: left;
  }

  .copyright {
    margin: auto;
    line-height: 2;
    font-weight: 300;
    color: #666666;
    text-align: center;
  }

  .copyright a {
    text-decoration: none;
    color: red;
  }

  .footer-title {
    color: white;
    font-size: 14px;
  }


  .footer-nav {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 16px;
    text-align: left;
    line-height: 1.5;
    font-weight: 300;
  }

  .footer-nav i {
    padding-right: 10px;
    color: #808080;
  }

  .footer-nav a {
    text-decoration: none;
    padding: 5px 0;
    display: block;
    color: #808080;
  }

</style>