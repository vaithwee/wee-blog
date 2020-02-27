<template>
  <section>
    <div class="content">

      <el-row>
        <h2>Wee Blog</h2>
        <p class="section-lead text-muted">We wrote some articles about whatever was on our heads and most people liked it.</p>
        <el-col :xs="{span:22,offset:1}" :sm="{span:22, offset:1}" :md="{span:18, offset:3}">
          <el-row :gutter="30">
            <el-col :xs="{span:24}" :sm="{span:12}" :md="{span:8}" v-for="(item, index) in list"
            >
              <home-article-list-item>

              </home-article-list-item>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

    </div>
  </section>
</template>

<script>
    import HomeArticleListItem from "./HomeArticleListItem";
    export default {
        name: "HomeArticleList",
        data() {
            return {
                list: [
                    {
                        id: 123,
                    },
                    {
                        id: 123,
                    },
                    {
                        id: 123,
                    },
                    {
                        id: 123,
                    },
                    {
                        id: 123,
                    },

                ]
            }
        },
        components: {
            HomeArticleListItem,
        }
    }
</script>

<style scoped>
.content {
  background-color: #f9f9f9;
}
</style>