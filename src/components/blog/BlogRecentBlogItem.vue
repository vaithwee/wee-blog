<template>
  <div class="rbi-content">
    <a href="#" class="rbi-img" :style="{'background-image':'url(' + article.cover.previewURL + ')', 'background-size':'cover'}">
    </a>
    <div class="rbi-desc">
      <h3><a href="#">{{article.title}}</a></h3>
      <p class="rbi-date"><span>{{createDateString}}</span></p>
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
      },
      titleColor: {
        type: String,
        default() {
          return null;
        }
      },
      dateColor: {
        type: String,
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
    },
    created() {
      console.log(this.dateColor);
      console.log(this.titleColor);
    }
  }
</script>

<style scoped>
  .rbi-content {
    text-align: left;
    margin: 20px 0;
  }

  .rbi-desc {
    padding-left: 80px;
  }

  .rbi-img {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 70px;
    height: 60px;
    float: left; }

  .rbi-desc h3 {
    font-size: 14px;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .rbi-desc h3 a {
    color: #4d4d4d;
    text-decoration: none;
  }

  .rbi-date {
    font-size: 13px;
  }
</style>