<template>
    <scroll @scroll="contentScroll" class="content">
        <section class="hero" ref="hero">
            <div class="overlay"></div>
            <div class="text">
                <h1>I'm <span class="bold">Wee</span>, I love <span class="bold">Coding</span>.</h1>
            </div>
        </section>

        <div style="background-color: white;padding: 100px 10px;margin-left: auto;margin-right: auto">
            <el-row>
              <el-col :xs="{span:24}" :sm="{span:22, offset:1}" :md="{span:18, offset:3}">
                <el-row :gutter="20">
                  <el-col :xs="{span:24}" :sm="{span:8}" :md="{span:8}">
                    <div class="list-item">
                      <div class="icon">
                        <i class="el-icon-star-off"></i>
                      </div>
                      <div class="desc">
                        <h2>Based on Bootstrap 4</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore.
                        </p>
                        <a href="#" class="more">Learn More</a>
                      </div>
                    </div>
                  </el-col>
                  <el-col :xs="{span:24}" :sm="{span:8}" :md="{span:6}">
                    <div class="list-item">
                      <div class="icon">
                        <i class="el-icon-star-off"></i>
                      </div>
                      <div class="desc">
                        <h2>Based on Bootstrap 4</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore.
                        </p>
                        <a href="#" class="more">Learn More</a>
                      </div>
                    </div>
                  </el-col>
                  <el-col :xs="{span:24}" :sm="{span:8}" :md="{span:6}">
                    <div class="list-item">
                      <div class="icon">
                        <i class="el-icon-star-off"></i>
                      </div>
                      <div class="desc">
                        <h2>Based on Bootstrap 4</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore.
                        </p>
                        <a href="#" class="more">Learn More</a>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>

        </div>
       <home-article-list></home-article-list>
        <div style="background-color: orange;height: 150px;"></div>
        <div style="background-color: gray;height: 150px;"></div>
        <div style="background-color: brown;height: 150px;"></div>
        <div style="background-color: black;height: 150px;"></div>
        <div style="background-color: red;height: 150px;"></div>
        <div style="background-color: orange;height: 150px;"></div>
        <div style="background-color: gray;height: 150px;"></div>
        <div style="background-color: brown;height: 150px;"></div>
        <div style="background-color: black;height: 150px;"></div>
        <div style="background-color: red;height: 150px;"></div>
        <div style="background-color: orange;height: 150px;"></div>
        <div style="background-color: gray;height: 150px;"></div>
        <div style="background-color: brown;height: 150px;"></div>
        <div style="background-color: black;height: 150px;"></div>
        <div style="background-color: red;height: 150px;"></div>
        <div style="background-color: orange;height: 150px;"></div>
        <div style="background-color: gray;height: 150px;"></div>
        <div style="background-color: brown;height: 150px;"></div>
        <div style="background-color: black;height: 150px;"></div>
    </scroll>
</template>

<script>
    import Scroll from "@/components/Scroll";
    import HomeArticleList from "@/components/home/HomeArticleList";
    export default {
        name: "Home",
        components: {
            Scroll,
            HomeArticleList
        },
        mounted() {
            this.$parent.$refs.nav.changeBgColor("rgba(0,0,0,0)");
        },
        methods: {
            contentScroll(position) {
                let min = - (this.$refs.hero.offsetHeight - 87);
                if (position.y < min) {
                    this.$parent.$refs.nav.changeBgColor("rgba(0,0,0,1)");
                } else  {
                    this.$parent.$refs.nav.changeBgColor("rgba(0,0,0,0)");
                }
            }
        }
    }
</script>

<style scoped>

    .content {
        overflow: hidden;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    .hero .text {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 50vh;
        min-height: 400px;
        /*transform: translateY(-60%);*/
        /*-webkit-transform: translateY(-60%);*/
        /*-moz-transform: translateY(-60%);*/
        /*-o-transform: translateY(-60%);*/
        /*-ms-transform: translateY(-60%);*/
        text-align: center;
        color: white;
    }

    .overlay {
        background-color: #000;
        opacity: .85;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 50vh;
      min-height: 400px;
    }

    .hero {
        height: 50vh;
        min-height: 400px;
        background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582733231412&di=7227476d32e7ba4b649468d2c452c28c&imgtype=0&src=http%3A%2F%2Fe0.ifengimg.com%2F08%2F2019%2F0422%2F60EA3F2C3828505F80355AEF967D2A9ED2075E2D_size2392_w3543_h2362.jpeg");
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        overflow: auto;
    }

    .bold {
        font-weight: 600;
    }
    .text h1 {
        margin-top: 25vh;
    }

    .list-item {
        display: flex;
        display: -webkit-flex;
        width: 100%;
        text-align: left;
    }

    .icon {
        flex: 0 0 65px;
        -webkit-flex: 0 0 65px;
        font-size: 45px;
        line-height: 0;
        color: #ccc;
    }

    .desc {
        flex: 1;
        -webkit-flex: 1;
    }

    .list-item .desc h2 {
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: .5px;
        margin-bottom: 10px;
        font-family: inherit;
        line-height: 1.1;
    }

    .list-item .desc p {
        line-height: 28px;
        font-size: 16px;
        margin-bottom: 0;
    }

    .list-item .desc .more {
        display: inline-block;
        margin-top: 10px;
    }

</style>
