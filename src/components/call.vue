<template>
  <div class="box">
    <div>
      <div v-for="item in list" class="item">
      <div class="icondv">
        <i :class="item.icon" :style="{color:item.color}"></i>
       <span class="text">{{item.title}}:</span>
      </div>
       <div class="dv_text">{{item.value}}</div>
    </div>
    </div>
  </div>
</template>
<script>
import "../jquery-1.8.2";
export default {
  data(){
    return{
      list:[
        {title:"电话",icon:"el-icon-phone-outline",value:"17356204900",color:"#2867ce"},
        {title:"邮箱",icon:"el-icon-message",value:"1041842139@qq.com",color:"#f44336"},
        {title:"微信",icon:"el-icon-chat-dot-round",value:"17356204900",color:"green"},
        {title:"地址",icon:"el-icon-location",value:"江苏无锡市xxxx",color:"#93a8ff"},
      ]
    }

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
.box>div{
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

}
.item{
  display: flex;
  height: 20%;
  align-items: center;
  font-size: 30px;
  border-bottom: 1px dashed #2867ce;
}
.item>div{
  display: flex;
  align-items: center;
}
.text{
  font-size: 20px;
  font-weight: bold;
  color: #2867ce;
}
.dv_text{
  font-size: 16px;
  color: #426696;
}
.icondv{
  width: 90px;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
}

</style>