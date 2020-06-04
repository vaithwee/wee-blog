<template>
  <el-drawer
          title="我是标题"
          :visible.sync="show"
          direction="rtl"
          :before-close="handleClose"
  >
  >
    <span>我来啦!</span>
  </el-drawer>
</template>

<script>
  export default {
    name: "NavigationDrawer",
    model: {
      prop: 'show',
      event: 'updateEvent'
    },
    props: {
      show: {
        property: Boolean,
        default() {
          return false;
        }
      }
    },
    methods: {
      handleClose(done) {
        done();
        this.$emit("updateEvent", false);
      }
    }
  }
</script>

<style scoped>

</style>