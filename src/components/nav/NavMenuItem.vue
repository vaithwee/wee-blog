<template>
  <li class="nav-menu-item">
        <span class="nav-menu-item-title" :class="{active: isActive}">
          <router-link :to="to" class="nav-link">
            <slot></slot>
          </router-link>
        </span>
  </li>
</template>

<script>
  export default {
    name: "NavMenuItem",
    props: {
      to: {
        type: String,
      },
      title: {
        type: String,
      }
    },
    computed: {
      isActive() {
        // console.log(this.$router.path);
        if (this.$router.path !== null) {
          return this.$route.path.indexOf(this.to) !== -1;
        }
        return false;
      }
    }
  }
</script>

<style scoped>
  .nav-menu-item-title {
    color: black;
    position: relative;
    /*font-size: 12px;*/
    font-weight: 400;
  }

  .nav-menu-item-title:after {
    content: '';
    position: absolute;
    top: 120%;
    left: 50%;
    background: rgba(0, 0, 0, 0.7);
    width: 0;
    height: 2px;
    transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transition: all .5s;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    -ms-transition: all .5s;
  }

  .nav-menu-item-title:hover {
    color: rgba(0, 0, 0, 0.7);
  }

  .nav-menu-item-title:hover:after {
    width: 80%;
  }

  .nav-menu-item {
    padding: 0 20px;
  }

  .active {
    color: rgba(0, 0, 0, 0.7);
  }

  .nav-menu-item-title.active:after {
    width: 95%;
  }

  .nav-link {
    color: rgba(0, 0, 0, 0.7);
    text-decoration: none;
  }
</style>