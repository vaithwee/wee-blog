<template>
  <el-col :xs="{'span':24}" :sm="{'span':span}" :md="{'span':span}">
    <div class="card" v-if="this.type === 0">
      <el-row :gutter="0">
        <el-col :xs="{span:24}" :sm="{span:12}" :md="{span:12}">
          <div class="card-img" :style="{backgroundImage: 'url(\'' + article.cover.originalURL + '\')'}">
          </div>
        </el-col>
        <el-col :xs="{span:24}" :sm="{span:12}" :md="{span:12}">
          <div class="card-body">
            <h4 class="card-title">
              <router-link :to="'/article/' + article.id" data-id="1" data-toggle="read" style="color: black">
                {{article.title}}
              </router-link>


            </h4>
            <div class="article-subtitle">by <a href="#">Wee</a> on {{createDateString}}</div>
            <p class="card-text">{{preText}}}</p>
            <div class="text-right">
              <router-link :to="'/article/' + article.id" class="card-more" data-id="1" data-toggle="read">Read More <i
                      class="ion-ios-arrow-right"></i></router-link>
            </div>
          </div>

        </el-col>
      </el-row>
    </div>

    <div class="card" v-if="this.type===1">
      <div class="card-img-hor" :style="{backgroundImage: 'url(\'' + article.cover.originalURL + '\')'}">
        <div class="overlay card-body">
          <h4 class="card-title">
            <router-link :to="'/article/' + article.id" data-id="1" data-toggle="read" style="color: white">
              {{article.title}}
            </router-link>
          </h4>
          <div class="article-subtitle">by <a href="#">Wee</a> on {{createDateString}}</div>
          <p class="card-text" style="color: white">{{preText}}}</p>
          <div class="text-right">
            <router-link :to="'/article/' + article.id" class="card-more" data-id="1" data-toggle="read"
                         style="color: white">Read More <i
                    class="ion-ios-arrow-right"></i></router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="card" v-if="(this.type > 1)">
      <div :class="{'card-img-hor':this.type===4,'card-img':type===2||type===3}"
           :style="{backgroundImage: 'url(\'' + article.cover.originalURL + '\')'}">
      </div>
      <div class="card-body">
        <h4 class="card-title">
          <router-link :to="'/article/' + article.id" data-id="1" data-toggle="read" style="color: black">
            {{article.title}}
          </router-link>
        </h4>
        <div class="article-subtitle">by <a href="#">Wee</a> on {{createDateString}}</div>

        <p class="card-text">{{preText}}</p>
        <div class="text-right">
          <router-link :to="'/article/' + article.id" class="card-more" data-toggle="read" data-id="1">Read More <i
                  class="ion-ios-arrow-right"></i></router-link>
        </div>
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
        type: Number,
        default() {
          return 0;
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
        if (this.type === 1 || this.type === 0 || this.type === 4) {
          return 24;
        } else {
          return 12;
        }
      },
      preText() {
        return marker(this.article.content, { sanitize: true }).replace(/<[^>]+>/g, "").substr(0, 200);
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
  }


  .card-img {
    width: 100%;
    height: 0;
    padding-top: 80%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
  }


  .card-img-hor {
    width: 100%;
    height: 370px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
  }


  .card-title {
    font-size: 30px;
    line-height: 30px;
    text-decoration: none;
    margin: 0;
  }

  .card-title a {
    text-decoration: none;
  }


  .article-subtitle {
    font-size: 14px;
    color: #666;
    margin-top: 16px;
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
    color: #000;
    display: inline-block;
    margin-top: 10px;
    font-size: 14px;
  }

  .card-body {
    padding: 20px;
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
