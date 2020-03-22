<template>
  <section>
    <div class="content">

      <el-row>
        <h2>My Blog</h2>
        <p class="section-lead text-muted">I wrote some articles about whatever was on our heads and most people liked
          it.</p>
        <el-row :gutter="30" style="max-width: 1024px;margin: auto">
          <home-article-list-item :article="item" v-for="(item, index) in list" :key="index" :type="index % 4">

          </home-article-list-item>

        </el-row>
      </el-row>

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
      return {
      }
    },
    components: {
      HomeArticleListItem,
    }
  }
</script>

<style scoped>
  .content {
    background-color: #f9f9f9;
  }

  .content h2 {
    font-size: 40px;
    font-weight: bold;
    font-family: Roboto,sans-serif;
  }

  .text-muted {
    font-size: 16px;
    padding: 10px 10px;
    /*text-align: left;*/
  }
</style>
