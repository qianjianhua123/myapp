<template>
  <div class="box">

    <div>
      <el-carousel  style="width: 100%; border-radius: 20px;height:300px" >
        <el-carousel-item v-for="item in imglist" :key="item">
          <img :src="item.url" style="width: 100%; height:300px" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div>
      <ul class="uu">
        <li>在2018-9至2022-6就读于安徽省皖江工学院理工类专业</li>
        <li>在校期间四年担任班级班长</li>
        <li>在2019-2020学年参加"IT 爱好者协会',并担任技术组长</li>
        <li>在2019-2020学年获得学院二等奖学金</li>
        <li>在2021-2022学年于互联网公司前端开发岗实习一年</li>
      </ul>
    </div>

  </div>
</template>
<script>
import "../jquery-1.8.2";
export default {
  data() {
    return {
      imglist: [
        { url: require("../imgs/sch1.png") },
        { url: require("../imgs/sch2.png") },
      ],
    };
  },
  methods: {
    foo() {
      $(".box").fadeIn(1000, function () {});
    },
  },
  mounted() {
    this.foo();
  },
};
</script>

<style scoped>
.box {
  width: 70%;
  height: 90%;
  display: none;
}
.box > div {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
}
.box>div:nth-child(1){
  height: 300px;
}
img {
  border-radius: 20px;
}
.uu {
    margin: 20px;
    color: rgb(66, 102, 150);
}
li{
    margin: 5px 0px;
}
</style>