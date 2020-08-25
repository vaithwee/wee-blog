<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" :style="{'padding': pt + ' ' + pr + ' ' + pb + ' ' + pl }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll';

  export default {
    name: "Scroll",
    props: {
      bounce: {
        type: Boolean,
        default() {
          return true;
        }
      },
      pt: {
        type: String,
        default() {
          return "0";
        }
      },
      pl: {
        type: String,
        default() {
          return "0";
        }
      },
      pr: {
        type: String,
        default() {
          return "0";
        }
      },
      pb: {
        type: String,
        default() {
          return "0";
        }
      },
    },
    data() {
      return {
        scroll: null,
      }
    },
    mounted() {
      this.scroll = new BetterScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
        mouseWheel: true,
        bounce: this.bounce,
        scrollbar: {
          fade: true,
          interactive: true // 1.8.0 新增
        },
      });

      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });


    },
    methods: {},
    computed: {},
    watch: {
      '$route' (from, to) {
        this.scroll.scrollTo(0, 0);
      }
    }
  }
</script>

<style scoped>

</style>
