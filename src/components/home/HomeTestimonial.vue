<template>
  <div class="testimonial-content-main">
    <div class="testimonial-content-inner shadow-border">
      <div style="padding: 30px">
        <span class="test-title">关于我</span>
        <el-row>
          <el-col :md="12" class="test-content">
            <h4>VAITH</h4>
            <p>一个热爱编程和游戏开发的小码农, 目前正在从事移动端开发工作. </p>
            <p>热爱学习, 喜欢交流.</p>
            <p>目前正在学习Unity游戏制作, 游戏天下第一!哈哈!</p>
          </el-col>
          <el-col :md="10" :offset="2" class="test-content">
            <div>
              <a class="test-icon" href="https://github.com/vaithwee">
                <img src="../../assets/img/github.svg" style="width: 30px;height: 30px;margin-top: 10px" />
                <span class="test-icon-title">Github</span>
              </a>


            </div>
          </el-col>
        </el-row>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeTestimonial"
  }
</script>

<style scoped>

  .testimonial-content-main {
    background-color: var(--wee-background-color);
  }

  .testimonial-content-inner {
    max-width: 1024px;
    background-color: white;
    margin: 30px auto;
    text-align: left;
    padding: 0;
  }

  .test-title {
    font-size: 35px;
    font-weight: bold;
    color: black;
  }

  .test-content {
    color: black;
    text-align: left;
  }

  .test-content h4 {
    font-weight: bold;
    font-size: 20px;
  }

  .test-content p {
    font-weight: bolder;
  }
  .test-icon {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    box-shadow: #ddd 0 0 10px 0;
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  .test-icon-title {
    text-align: center;
    display: inline-block;
    height: 50px;
    font-size: 15px;
    font-weight: bolder;
    margin-top: 10px;
    text-decoration: none;
    color: black;

  }
</style>
