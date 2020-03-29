<template>
  <div>
    <ul class="nav-menu-main">
      <nav-menu-item to="/home">首页</nav-menu-item>
      <nav-menu-item to="/blog">博客</nav-menu-item>
    </ul>
  </div>
</template>

<script>
  import NavMenuItem from "./NavMenuItem";

  export default {
    name: "NavMenu",
    components: {
      NavMenuItem,
    }
  }
</script>

<style scoped>
  .nav-menu-main {
    display: flex;
    color: white;
    font-weight: bold;
    line-height: 87px;
    font-size: 14px;
    letter-spacing: 1px;
    list-style: none;
    position: fixed;
    right: 0;
    margin: 0;
  }


</style>
