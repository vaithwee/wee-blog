<template>
  <div>
    <route-tip-view/>
    <div class="content">
      <div class="bs-content">
        <label>
          <input v-model="keyword" type="text" class="bs-input" placeholder="请输入关键词" ref="input"/>
        </label>
        <button type="submit" class="bs-button">搜索</button>
      </div>
      <div v-if="isNone" class="sr-none">
          <h1>没有搜索结果</h1>
      </div>
      <home-article-list :list="list"/>
    </div>
  </div>
</template>

<script>
  import RouteTipView from "../../components/RouteTipView";
  import HomeArticleList from "../../components/home/HomeArticleList";
  import ArticleAPI from "../../network/article_api";
  import HomeArticleListItem from "../../components/home/HomeArticleListItem";

  export default {
    name: "serach",
    components: {
      HomeArticleListItem,
      RouteTipView,
      HomeArticleList,
    },
    data() {
      return {
        list: [],
        keyword: "",
        isNone: false,
      };
    },
    created() {
      this.searchArticleByKeyword();
    },
    methods: {
      searchArticleByKeyword() {
        let keyword = this.$route.query.keyword;
        this.keyword = keyword;
        ArticleAPI.searchBlog(keyword, 0, 20).then(res => {
          this.list = res.data.data;
          this.isNone = this.list.length === 0;
        })
      }
    },
    watch: {
      '$route'(from, to) {
        this.searchArticleByKeyword();
      }
    }
  }
</script>

<style scoped>
  .content {
    max-width: var(--wee-max-content-width);
    margin: auto;
    padding: 40px;
    height: 100%;
  }

  .bs-input {
    width: 300px;
    height: 30px;
    font-weight: bold;
    font-size: 20px;
  }

  .bs-button {
    width: 52px;
    height: 52px;
  }

  .sr-none {
    width: 100%;
    height: 50vh;
    margin: auto;
  }
</style>