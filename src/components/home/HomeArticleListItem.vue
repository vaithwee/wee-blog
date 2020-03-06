<template>
  <div class="card">
    <el-image class="card-img-top" fit="cover"
              :src="article.cover.originalURL" alt="Article Image" style="max-height: 300px"/>
    <div class="card-body">
      <div class="article-subtitle">by <a href="#">Wee</a> on {{createDateString}}</div>
      <h4 class="card-title"><a href="#" data-toggle="read" data-id="1">{{article.title}}</a></h4>
      <p class="card-text">Mauris eu eros in metus elementum porta eget sed ligula. Praesent consequat, ipsum molestie
        pellentesque venenatis.</p>
      <div class="text-right">
        <router-link :to="'/article/' + article.id" class="card-more" data-toggle="read" data-id="1">Read More <i
                class="ion-ios-arrow-right"></i></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeArticleListItem",
    props: {
      article: null,
    },
    computed: {
      createDateString() {
        let date = new Date(this.article.createDate);
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDay();
        return month + "月 " + day + "日, " + year;
      }
    }
  }
</script>

<style scoped>
  .card {
    border: none;
    box-shadow: 0 0 40px rgba(0, 0, 0, .05);
    -webkit-box-shadow: 0 0 40px rgba(0, 0, 0, .05);
    -moz-box-shadow: 0 0 40px rgba(0, 0, 0, .05);
    -ms-box-shadow: 0 0 40px rgba(0, 0, 0, .05);
    -o-box-shadow: 0 0 40px rgba(0, 0, 0, .05);
    margin-bottom: 30px;
    overflow: hidden;
    text-align: left;
    padding: 10px;
  }

  .card-img-top {

  }

  .card-title {
    font-size: 20px;
    line-height: 28px;
    color: #000;
    text-decoration: none;
  }

  .card-title a {
    color: #000;
    text-decoration: none;
  }

  .article-subtitle {
    font-size: 14px;
    color: #666;
  }

  .article-subtitle a {
    color: #666;
    border-bottom: 1px dotted #666;
    text-decoration: none;
  }

  .card-text {
    color: #666;
    line-height: 26px;
  }

  .card-more {
    text-transform: uppercase;
    font-weight: 800;
    text-transform: 2px;
    color: #000;
    display: inline-block;
    margin-top: 10px;
    font-size: 14px;
  }

  .card-body {
    margin-top: 20px;
  }
</style>
