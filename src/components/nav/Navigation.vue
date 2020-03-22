<template>
  <div class="nav" :style="{'background-color':backgroundColor}">
    <div class="nav-content">
      <el-row :gutter="20">
        <el-col :span="6">
          <span class="nav-title">Vaith</span><span class="nav-point">.</span>
        </el-col>
        <el-col :offset="6" :span="12" class="nav-menu">
          <nav-menu/>
        </el-col>
      </el-row>
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
      bgColor: {
        type: String,
        default() {
          return 'rgba(0,0,0,0.85)';
        }
      }
    },
    data() {
      return {
        backgroundColor: this.bgColor
      }
    },
    methods: {
      changeBgColor(value) {
        this.backgroundColor = value;
      }
    }
  }
</script>

<style scoped>
  .nav {
    position: fixed;
    display: flex;
    width: 100%;
    height: 87px;
    text-align: left;
    top: 0;
    z-index: 1;
  }


  .nav-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 87px;
    margin: 0;
    text-align: left;
    z-index: 1;
    padding: 0 20px;
  }

  .nav-title {
    color: white;
    line-height: 87px;
    font-size: 35px;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
  }

  .nav-point {
    padding-left: 3px;
    color: cornflowerblue;
    line-height: 87px;
    font-size: 35px;
    font-weight: bold;
  }

  .nav-menu {
    text-align: right;
    height: 87px;
  }
</style>
