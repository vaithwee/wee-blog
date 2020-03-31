<template>
  <div class="testimonial-content-main">
    <div class="testimonial-content-inner shadow-border">
      <div style="padding: 30px">
        <h2>Testimonial</h2>
        <el-row>
          <el-col :md="18" class="test-content">
            <h4>VAITH</h4>
            <p>一个热爱编程和游戏开发的小码农, 目前正在从事移动端开发工作. </p>
            <p>热爱学习, 喜欢交流.</p>
            <p>目前正在学习Unity游戏制作, 游戏天下第一!哈哈!</p>
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
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    background-color: white;
  }

  .testimonial-content-inner h2 {
    font-size: 40px;
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

  .test-img {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
    margin-top: 20px;
    border-radius: 100px;
  }
</style>
