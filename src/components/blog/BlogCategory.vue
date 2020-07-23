<template>
  <div class="blog-category-content">
    <h3 style="text-align: left">分类/Category</h3>
    <ul class="category">
      <li v-for="cate in categories"><router-link :to="'search?keyword=cate:' + cate.name"><i class="el-icon-check"></i>{{cate.name}}</router-link></li>
    </ul>
  </div>
</template>

<script>
  import ArticleAPI from "../../network/article_api";
  export default {
    name: "BlogCategory",
    data() {
      return {
        categories: [],
      };
    },
    created() {
      ArticleAPI.getAllCategory().then(res => {
        this.categories = res.data;
      });
    }
  }
</script>

<style scoped>

  .category {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 14px;
    text-align: left;
    line-height: 2;
  }

  .category i {
    padding-right: 10px;
    color: #999999;
  }

  .category a {
    text-decoration: none;
    border-bottom: 1px solid #f0f0f0;
    padding: 5px 0;
    display: block;
    color: #4d4d4d;
  }

  .blog-category-content {
    margin: 50px 0;
  }
</style>