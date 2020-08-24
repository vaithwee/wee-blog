<template>
  <div>
    <route-tip-view/>
    <div class="content">
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
      };
    },
    created() {
      this.searchArticleByKeyword();
    },
    methods: {
      searchArticleByKeyword() {
        let keyword = this.$route.query.keyword;
        ArticleAPI.searchBlog(keyword, 0, 20).then(res => {
          this.list = res.data.data;
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
</style>