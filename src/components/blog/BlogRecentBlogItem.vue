<template>
  <div class="blog-recent-blog-item-content">
    <a href="#" class="blog-img" :style="{'background-image':'url(' + article.cover.previewURL + ')'}">
    </a>
    <div class="desc">
      <h3><a href="#">{{article.title}}</a></h3>
      <p class="admin"><span>{{createDateString}}</span></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogRecentBlogItem",
    props: {
      article: {
        type: Object,
        default() {
          return null;
        }
      }
    },
    computed: {
      createDateString() {
        let date = new Date(this.article.createDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return month + "月 " + day + "日, " + year;
      },
    }
  }
</script>

<style scoped>
  .blog-recent-blog-item-content {
    text-align: left;
    margin: 20px 0;
  }

  .desc {
    padding-left: 80px;
  }

  .blog-img {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 70px;
    height: 60px;
    float: left; }

  .desc h3 {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .desc h3 a {
    color: #4d4d4d;
    text-decoration: none;
  }

  .admin {
    font-size: 13px;
  }
</style>