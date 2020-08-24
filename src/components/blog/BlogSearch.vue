<template>
  <div class="bs-content shadow-border">
    <div class="bs-input-content">
      <label>
        <input type="text" class="bs-input" placeholder="请输入关键词" ref="input" @keypress.enter="searchBlog" />
      </label>
    </div>
    <button type="submit" class="bs-button" @click="searchBlog">搜索</button>
  </div>
</template>

<script>
  export default {
    name: "BlogSearch",
    methods: {
      searchBlog() {
        let keyword = this.$refs.input.value;
        this.$router.push({path: '/search', query: {keyword: keyword}});
      }
    }
  }
</script>

<style scoped>
  /*@import "src/assets/css/common.css";*/
</style>