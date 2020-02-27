<template>
  <div class="card">
    <el-image class="card-img-top" fit="cover" src="http://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&f=JPEG?w=1280&h=853" alt="Article Image" />
    <div class="card-body">
      <div class="card-subtitle mb-2 text-muted">by <a href="#">John Doe</a> on August 10, 2017</div>
      <h4 class="card-title"><a href="#" data-toggle="read" data-id="1">Duis aute irure dolor in reprehenderit in voluptate</a></h4>
      <p class="card-text">Mauris eu eros in metus elementum porta eget sed ligula. Praesent consequat, ipsum molestie pellentesque venenatis.</p>
      <div class="text-right">
        <a href="#" class="card-more" data-toggle="read" data-id="1">Read More <i class="ion-ios-arrow-right"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeArticleListItem"
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

  .card-subtitle {
    font-size: 14px;
    color: #666;
  }

  .card-subtitle a {
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