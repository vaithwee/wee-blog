<template>
  <div class="content">
    <div class="footer">
      <el-row :gutter="30">
        <el-col class="footer-content" :xs="{'span':24}" :sm="{'span':6}" :md="{'span':6}">
          <div>
            <h2 class="footer-title">NAVIGATIONAL</h2>
            <ul class="footer-nav">
              <li>
                <router-link to="/home"><i class="el-icon-check"></i>首页</router-link>
              </li>
              <li>
                <router-link to="/blog"><i class="el-icon-check"></i>博客</router-link>
              </li>
              <!--              <li><a href="#"><i class="el-icon-check"></i>联系</a></li>-->
              <li><a href="https://github.com/vaithwee"><i class="el-icon-check"></i>Github</a></li>
            </ul>
          </div>
        </el-col>
        <el-col class="footer-content" :xs="{'span':24}" :sm="{'span':6}" :md="{'span':6}">
          <h2 class="footer-title">RECENT BLOG</h2>
          <blog-recent-blog-item v-for="article in recent" :article="article" title-color="#b3b3b3"
                                 date-color="#666666"/>
        </el-col>
        <el-col class="footer-content" :xs="{'span':24}" :sm="{'span':6}" :md="{'span':6}">
          <h2 class="footer-title">ARCHIVE</h2>
          <ul class="footer-archive">
            <li v-for="a in archive">
              <router-link :to="'/search?keyword=archive:' + a"><i class="el-icon-check"></i>{{a.slice(0, 4) + '年' +
                a.slice(4) + '月'}}
              </router-link>
            </li>
          </ul>
        </el-col>
        <el-col class="footer-content" :xs="{'span':24}" :sm="{'span':6}" :md="{'span':6}">
          <h2 class="footer-title">TAGS</h2>
          <p class="footer-tags">
            <span v-for="t in tag"><router-link :to="'/search?keyword=tag:' + t.name"><i
                    class="el-icon-collection-tag"></i>{{t.name}}</router-link></span>
          </p>
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
  import BlogRecentBlogItem from "./blog/BlogRecentBlogItem";
  import AppAPI from "../network/app_api";

  export default {
    name: "Footnote",
    components: {
      BlogRecentBlogItem
    },
    data() {
      return {
        recent: [],
        archive: [],
        tag: [],
      };
    },
    created() {
      AppAPI.getFootnote().then(res => {
        this.recent = res.data.articles;
        this.archive = res.data.archives;
        this.tag = res.data.tags;
      });
    }
  }
</script>

<style scoped>

  .content {
    background: #212121;
    min-height: 450px;
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
    margin-top: 30px;
  }

  .copyright a {
    text-decoration: none;
    color: red;
  }

  .footer-title {
    color: white;
    font-size: 14px;
    margin-bottom: 40px;
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

  .footer-archive {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 16px;
    text-align: left;
    line-height: 1.5;
    font-weight: 300;
  }


  .footer-archive i {
    padding-right: 10px;
    color: #808080;
  }

  .footer-archive a {
    text-decoration: none;
    padding: 5px 0;
    display: block;
    color: #808080;
  }

  .footer-tags {

  }

  .footer-tags span {
    float: left;
    margin-bottom: 3px;
    margin-right: 3px;
    line-height: 2;
  }

  .footer-tags a {
    border: 1px solid #333333;
    color: #808080;
    padding: 5px 12px;
    font-size: 13px;
    border-radius: 4px;
    text-decoration: none;
  }

  .footer-tags a:hover {
    background-color: red;
    color: white;
    box-shadow: 0 2px 10px -5px rgba(0, 0, 0, 1);
  }

  .footer-content {
    margin-bottom: 40px;
  }
</style>