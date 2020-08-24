<template>
  <div>
    <route-tip-view/>
    <div class="content">
      <div class="bs-content">
        <div class="shadow-border sr-content">
          <div style="flex: 1">
            <label>
              <input v-model="keyword" type="text" class="bs-input" placeholder="请输入关键词" ref="input" @keypress.enter="search"/>
            </label>
          </div>
          <button type="submit" class="bs-button" @click="search">搜索</button>
        </div>

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
    name: "search",
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
      },
      search() {
        let keyword = this.$refs.input.value;
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
    width: 100%;
    height: 55px;
    font-weight: bold;
    min-height: 10px;
    min-width: 10px;
    font-size: 20px;
    padding: 0 10px;
    border: none;
    flex: 1;
  }

  .bs-button {
    width: 70px;
    height: 55px;
    margin-top: 0;
    border: none;
    padding: 0;
  }

  .sr-none {
    width: 100%;
    height: 50vh;
    margin: auto;
  }

  .sr-content {
    display: flex;
    border: 1px solid #f0f0f0;
    margin: auto;
    flex: 1;
    /*width: 50vw;*/
  }
</style>