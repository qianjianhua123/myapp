<template>
  <div class="box">
    <div v-for="item in list">
        <span>
            <span><h4>{{item.title}}</h4></span>
            <span>:</span>
        </span>
        <span>{{item.name}}</span>
    </div>
  </div>
</template>


<script>
import "../jquery-1.8.2";
export default {
    data(){
        return{
            list:[
                {title:"姓名",name:"钱建华"},
                {title:"性别",name:"男"},
                {title:"籍贯",name:"安徽"},
                {title:"生日",name:"2001-01-01"},
                {title:"学历",name:"全日制本科"},
                {title:"现居地",name:"江苏无锡市"},
                {title:"工作状况",name:"求职中"},
                {title:"求职方向",name:"web前端开发"},
                {title:"工作经验",name:"一年web前端开发经验"},
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
  width: 80%;
  height: 90%;
  display: none; 
  margin-top: 15px;
}
.box>div{
    display: flex;
    height: 11%;
    align-items: center;
    border-bottom:1px dashed #2867ce ;
}
.box>div>span:nth-child(1){
   width: 80px;
   display: flex;
   justify-content: space-between;
   color:#2867ce;
}

.box>div>span:nth-child(2){
    margin-left: 10px;
    color: #426696;
}
</style>