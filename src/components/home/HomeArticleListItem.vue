<template>
  <el-col :xs="{'span':24}" :sm="{'span':span}" :md="{'span':span}">
    <div class="card"
         v-if="(this.type === 'vs' || this.type === 'vd' || this.type === 'vh' || this.type === 'va')"
         :style="{'height':height + 'px'}"
    >
      <div class="card-img">
        <el-image :src="article.cover.originalURL" class="card-img-content" fit="cover" :style="{'height':height * 0.75 + 'px'}" />
      </div>
      <div class="card-body shadow-border">
        <div class="article-subtitle"> {{createDateString}} by <a href="#">Vaith</a></div>
        <h4 class="card-title">
          <router-link :to="'/article/' + article.id" data-id="1" data-toggle="read" style="color: black">
            {{article.title}}
          </router-link>
        </h4>
        <p class="card-text">{{preText}}</p>
<!--        <div class="text-right">-->
<!--          <router-link :to="'/article/' + article.id" class="card-more" data-toggle="read" data-id="1">Read More <i-->
<!--                  class="ion-ios-arrow-right"></i></router-link>-->
<!--        </div>-->
      </div>
    </div>

  </el-col>


</template>

<script>
  import marker from 'marked';
  export default {
    name: "HomeArticleListItem",
    props: {
      article: null,
      type: {
        type: String,
        default() {
          return "vs"; //vs(vertical-single), vd(vertical-double), vh(vertical-half), va(vertical-all), ho(horizon)
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
      span() {
        if (this.type === 'vs') {
          return 8;
        } else if (this.type === 'vd' || this.type === 'ho') {
          return 16;
        } else if (this.type === 'va') {
          return 24;
        }else if (this.type === 'vh') {
          return 12;
        } else {
          return 8;
        }
      },
      preText() {
        return marker(this.article.content, { sanitize: true }).replace(/<[^>]+>/g, "").substr(0, 45);
      },
      height() {
        if (this.type === 'vs') {
          return 390;
        } else if (this.type === 'vd' || this.type === 'ho') {
          return 390;
        } else if (this.type === 'va') {
          return 550;
        }else if (this.type === 'vh') {
          return 420;
        } else {
          return 390;
        }
      }
    }
  }
</script>

<style scoped>
  .card {
    position: relative;
    border: none;
    margin-bottom: 60px;
    text-align: left;
    /*height: 390px;*/
    /*overflow: hidden;*/
  }


  .card-img {
    width: 100%;
    position: relative;
    top: 0;
    overflow: hidden;

  }

  .card-img-content {
    transition: all .4s;
  }

  .card-img-content:hover {
    transform: scale(1.1);
  }


  .card-img-hor {
    width: 100%;
    height: 370px;
  }


  .card-title {
    font-size: 28px;
    line-height: 1.1;
    text-decoration: none;
    margin: 0;
  }

  .card-title a {
    text-decoration: none;
  }


  .article-subtitle {
    font-size: 14px;
    color: #666;
    margin-bottom: 16px;
  }

  .article-subtitle a {
    color: black;
    border-bottom: 1px dotted #666;
    text-decoration: none;
    font-weight: bold;

  }

  .card-text {
    color: #666;
    line-height: 26px;
  }

  .card-more {
    text-transform: uppercase;
    font-weight: 800;
    color: #000;
    display: inline-block;
    margin-top: 10px;
    font-size: 14px;
  }

  .card-body {
    background: white;
    width: 80%;
    padding: 1em;
    position: absolute;
    bottom: 0;
    left: 0;
    min-height: 150px;
  }

  .card-body-right {
    background: white;
    height: 390px;
    width: 100%;
    padding: 1em;
  }

  .overlay {
    background-color: #000000;
    opacity: 0.8;
    height: 100%;
    width: 100%;
    color: white;
    vertical-align: bottom;
    text-align: left;
    padding: 20px;
  }
</style>
