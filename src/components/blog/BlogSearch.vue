<template>
  <div class="bs-content">
    <input type="text" class="bs-input" placeholder="请输入关键词" ref="input"/>
    <button type="submit" class="bs-button" @click="searchBlog">搜索</button>
  </div>
</template>

<script>
  export default {
    name: "BlogSearch",
    methods: {
      searchBlog() {
        let keyword = this.$refs.input.value;
        this.$router.push("search?keyword=" + keyword);
      }
    }
  }
</script>

<style scoped>

  .bs-content {
    display: flex;
    padding: 10px 10px;
  }

  .bs-input {
    width: 100%;
    border: 1px solid #f0f0f0;
    /*line-height: 1.8;*/
    flex: 1;
    padding: 10px 10px;

  }

  .bs-input:focus, .bs-input:active {
    border: 1px solid #f0f0f0;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
  }

  .bs-button {
    height: 40px;
    border: 1px solid #F6490D;
    background-color: #F6490D;
    color: white;
  }

  .bs-button:focus, .bs-button:active {
    border: 1px solid #F6490D;
    outline: none;
    /*background-color: rgba(0, 0, 0, 0);*/
  }


</style>