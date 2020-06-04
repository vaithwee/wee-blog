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
      }">Vaith</span><span class="nav-point">.</span>
      <div style="float: right">
        <p :class="{'hidden':isMiniScreen}">hello pc</p>
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
          点我打开
        </el-button>

        <el-drawer
                title="我是标题"
                :append-to-body="true"
                :visible.sync="drawer"
                direction="ttb"
                :before-close="handleClose">
          <span>我来啦!</span>
        </el-drawer>

      </div>
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
      },
    },
    data() {
      return {
        isTransparent: this.transparent,
        isMiniScreen: false,
        drawer: false,
      }
    },
    methods: {
      changeTransparent(value) {
        this.isTransparent = value;
      },
      changedDrawerState(value) {
        this.$emit("updateDrawerState", value);
      },
      handleClose(done) {
        done();
      }
    },
    mounted() {
      const min = 600;
      this.isMiniScreen = document.documentElement.clientWidth < min;
      const that = this;
      window.onresize = function tmp() {
        that.isMiniScreen = document.documentElement.clientWidth < min;
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
    margin-left: 10px;
    font-family: "Roboto", Arial, sans-serif;
    line-height: var(--wee-nav-height);
    font-size: 24px;
    font-weight: 700;
  }

  .nav-title-color-normal {
    color: black;
  }

  .nav-title-color-transparent {
    color: black;
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
