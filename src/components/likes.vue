<template>
  <div class="box">

    <div>
      <el-carousel height="480px" style="width: 100%; border-radius: 20px">
        <el-carousel-item v-for="item in imglist" :key="item">
          <img :src="item.url" style="width: 100%; height: 300px" />
          <div class="text">{{item.title}}</div>
        </el-carousel-item>
      </el-carousel>
    </div>

  </div>
</template>
<script>
import "../jquery-1.8.2";
export default {
  data() {
    return {
      imglist: [
        { url: require("../imgs/likes2.png"),
        title:"篮球是一项具有团结与竞技精神的运动,是我最喜欢的球类运动,这是斯蒂芬库里，我的偶像"},
        { url: require("../imgs/likes3.png"),
        title:"我喜欢看很难懂的文学作品,因为这样可以让我快速入眠,比如这本《人间失格》"},
        { url: require("../imgs/likes1.jpg"),
        title:"王者荣耀是我玩了很多年的游戏,以前确实很喜欢，现在不玩了,因为现在大家都说这是小学生玩的"
         },
        { url: require("../imgs/likes4.png"),
        title:"周杰伦的歌永不过时,我喜欢敲代码时听他的歌,比如一首反方向的钟"
         },
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
  width: 600px;
  height: 90%;
  display: none;
  margin-top: 15px;
}
.box > div {
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;

  border-radius: 20px;
}
img {
  border-radius: 20px;
}
.text{
    color: rgb(66, 102, 150);
    margin-top: 20px;
    font-size: 18px;
}

</style>