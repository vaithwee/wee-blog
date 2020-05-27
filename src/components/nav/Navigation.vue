<template>
  <div class="nav" :class="{
    'shadow-border':!isTransparent,
    'nav-bg-color-normal':!isTransparent,
    'nav-bg-color-transparent':isTransparent,
    }">
    <div class="nav-content">
      <span class="nav-title" :class="{
        'nav-title-color-normal':!isTransparent,
        'nav-title-color-transparent':isTransparent,
      }">Flutter For Web</span><span class="nav-point">.</span>
    </div>

  </div>
</template>

<script>
  import NavMenu from "./NavMenu";

  export default {
    name: "Navigation",
    components: {
      NavMenu
    },
    props: {
      transparent: {
        type: Boolean,
        default() {
          return true;
        }
      }
    },
    data() {
      return {
        isTransparent: this.transparent
      }
    },
    methods: {
      changeTransparent(value) {
        this.isTransparent = value;
      }
    }
  }
</script>

<style scoped>
  .nav {
    position: fixed;
    display: flex;
    width: 100%;
    height: var(--wee-nav-height);
    text-align: left;
    top: 0;
    z-index: 1;
  }

  .nav-bg-color-normal {
    background-color: white;
  }

  .nav-bg-color-transparent {
    background-color: #00000000;
  }

  .nav-content {
    max-width: var(--wee-max-content-width);
    height: 80px;
    width: 100%;
    margin: auto;
    padding-left: 10px;
    padding-right: 10px;
  }

  .nav-title {
    line-height: var(--wee-nav-height);
    font-size: 35px;
    font-weight: bold;
  }

  .nav-title-color-normal {
    color: black;
  }

  .nav-title-color-transparent {
    color: white;
  }

  .nav-point {
    padding-left: 3px;
    color: cornflowerblue;
    line-height: var(--wee-nav-height);
    font-size: 35px;
    font-weight: bold;
  }

  .nav-menu {
    text-align: right;
    height: var(--wee-nav-height);
  }
</style>
