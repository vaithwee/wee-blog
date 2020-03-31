<template>
  <section>
    <div class="article-list-content-main">
      <div class="article-list-content-inner">
<!--        <h2>我的博客</h2>-->
<!--        <p class="section-lead text-muted">在这里，我通过文字和图片来表达我的观点</p>-->
        <el-row :gutter="30">
          <home-article-list-item :article="item" v-for="(item, index) in list" :key="index" :type="index % 4">
          </home-article-list-item>
        </el-row>
      </div>
    </div>
  </section>
</template>

<script>
  import HomeArticleListItem from "./HomeArticleListItem";

  export default {
    name: "HomeArticleList",
    props: {
      list: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {}
    },
    components: {
      HomeArticleListItem,
    }
  }
</script>

<style scoped>
  .article-list-content-main {
    background-color: var(--wee-background-color);
  }

  .article-list-content-inner {
    max-width: var(--wee-max-content-width);
    margin: auto;
    padding-top: 30px;
  }

  .article-list-content-main h2 {
    font-size: 40px;
    font-weight: bold;
  }

  .text-muted {
    font-size: 16px;
    padding: 10px 10px;
    /*text-align: left;*/
  }
</style>
