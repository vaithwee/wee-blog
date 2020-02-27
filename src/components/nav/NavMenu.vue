<template>
  <div>
    <ul class="nav-menu-main">
      <nav-menu-item to="/home">Home</nav-menu-item>
      <nav-menu-item to="/blog">Blog</nav-menu-item>
      <nav-menu-item to="/project">Project</nav-menu-item>
<!--      <li class="nav-menu-item">-->
<!--        <span class="nav-menu-item-title">-->
<!--          <router-link to="/" class="nav-link">Home</router-link>-->
<!--        </span>-->
<!--      </li>-->
<!--      <li class="nav-menu-item"><span class="nav-menu-item-title"><router-link to="/blog"-->
<!--                                                                               class="nav-link">Blog</router-link></span>-->
<!--      </li>-->
<!--      <li class="nav-menu-item"><span class="nav-menu-item-title">Project</span></li>-->
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