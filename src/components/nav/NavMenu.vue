<template>
  <div>
    <ul class="nav-menu-main" :class="{
      'nav-horizontal': isHorizontal,
      'nav-vertical': !isHorizontal,
    }">
      <nav-menu-item to="/home">首页/HOME</nav-menu-item>
      <nav-menu-item to="/blog">博客/BLOG</nav-menu-item>
      <nav-menu-item to="/event">事件/EVENT</nav-menu-item>
      <nav-menu-item to="/about">关于/ABOUT ME</nav-menu-item>
      <nav-menu-item to="/contact">联系/CONTACT</nav-menu-item>
    </ul>
  </div>
</template>

<script>
  import NavMenuItem from "./NavMenuItem";

  export default {
    name: "NavMenu",
    components: {
      NavMenuItem,
    },
    props: {
      direction: {
        property: String,
        default() {
          return 'horizontal';
        }
      }
    },
    data() {
      return {
        isHorizontal: this.direction === "horizontal",
      }
    }
  }
</script>

<style scoped>
  .nav-menu-main {
    color: white;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 1px;
    list-style: none;
  }

  .nav-horizontal {
    display: flex;
    line-height: 87px;
    right: 0;
    margin: 0;
  }

  .nav-vertical {
    line-height: 35px;
    left: 0;
    margin: 0;
    /*font-weight: bold;*/
    font-size: 13px;
    padding-inline-start: 0px;
  }


</style>
