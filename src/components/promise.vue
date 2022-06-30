<template>
  <div class="box">
   <img src="../imgs/promise.png">
   <div class="text">
      专注于前端开发,不断的学习钻研前端开发相关技能和知识,成为一名优秀的前端开发工程师
   </div>
  </div>
</template>
<script>
import "../jquery-1.8.2";
export default {
  
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
  width: 70%px;
  height: 90%;
  display: none;
  border-radius:30px ;
}
img{
  width: 100%;
  height: 300px;
  border-radius:30px ;
}

.text{
  margin-top: 20px;
  color: #4266a9;
}

</style>