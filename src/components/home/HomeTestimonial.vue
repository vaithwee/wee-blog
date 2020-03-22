<template>
  <div class="testimonial">
<!--    <img style="width: 100%; height: 300px;" src="../../assets/test_bg.jpg"  alt=""/>-->
    <el-row>
      <h2>Testimonial</h2>
      <el-col
          :xs="{span:22,offset:1}"
          :sm="{span:22, offset:1}"
          :md="{span:18, offset:3}"
      >
      <el-row>
        <el-col :md="6">
          <img class="test-img" src="../../assets/test-img.jpeg"  alt=""/>
        </el-col>
        <el-col :md="18" class="test-content">
          <h4>VAITH</h4>
          <p>一个热爱编程和游戏开发的小码农, 目前正在从事移动端开发工作. </p>
          <p>热爱学习, 喜欢交流.</p>
          <p>目前正在学习Unity游戏制作, 游戏天下第一!哈哈!</p>
        </el-col>
      </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "HomeTestimonial"
  }
</script>

<style scoped>
.testimonial {
  background-image: url('../../assets/test_bg.jpg');
}
.testimonial h2 {
  font-size: 40px;
  font-weight: bold;
  color: white;
  font-family: 'Righteous', cursive;
}

  .test-content {
    color: white;
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
