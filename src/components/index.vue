<template>
    <div class="big">
      
        <div class="index_body">
           <div>
             <div class="body_left">
                <div class="title">
                    <img src="../imgs/title.jpg">
                    <h5>♥爱意随风起♥</h5>
                </div>

                <div>
                    <div v-for="(item,index) in mylist" class="item" @click="index_select(index)"
                    :style="{'background-color':num==index?'#e7faf3':'#c9eddf'}"
                    >
                      <div>
                          <i :class="item.icon" :style="{color:item.color}"></i>
                        <span>{{item.name}}</span>
                      </div>
                        
                </div>
                </div>
             </div>
             <div class="body_right">
              <router-view></router-view>
             </div>
           </div>
        </div>
    </div>
</template>

<script>
import navv from "@/components/navv.vue"
import "../jquery-1.8.2"
export default {
  components:{
    navv
  },
  data() {
    return {
      mylist:[
        {name:"个人介绍",icon:"el-icon-user-solid",color:"#2867ce"},
        {name:"教育经历",icon:"el-icon-office-building",color:"#f44336"},
        {name:"兴趣爱好",icon:"el-icon-basketball",color:"#ffbd27"},
        {name:"职业规划",icon:"el-icon-s-promotion",color:"#93a8ff"},
        {name:"联系方式",icon:"el-icon-phone-outline",color:"#09bb07"}
      ],
      num:10
    };
  },
  methods:{
    index_select(index){
      this.num = index
     switch (index) {
      case 0:
       this.$router.push("/");
        break;

      case 1:
       this.$router.push("/study");
        break;

      case 2:
       this.$router.push("/likes");
        break;

      case 3:
       this.$router.push("/promise");
        break;

      case 4:
       this.$router.push("/call");
        break;
     }
    },
     foo() {
      $(".index_body").slideDown(500, function () {});
    },
  },
  mounted(){
    this.foo();
  }
};
</script>

<style scoped>
.big{
   height: calc(100vh - 60px);
  background-color: rgb(90, 243, 217);
  
}
.index_body {
  height: calc(100vh - 60px);
  background-color: rgb(90, 243, 217);
  display: none;
}
.index_top > div {
  width: 800px;
  height: 100%;
  display: flex;
  align-items: center;
}
.index_top > div > span {
  height: 100%;
  flex: 1;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: all 1s;
}
.index_top > div > span:hover{
   background: rgb(222, 243, 240);
   color: rgb(66, 102, 150);
}
.index_body>div{
    width: 1200px;
    height: 100%;
    background-color: rgb(90, 243, 217);
    margin: 0px auto;
    overflow: hidden;
    display: flex;
    align-items: center;
}
.body_left,.body_right{
    width: 350px;
    height: 90%;
    border-radius:30px ;
    background-color: #c9eddf;
}
.body_left{
    display: flex;
    flex-direction: column;
}
.body_left>div:nth-child(2){
    flex: 1;
    display: flex;
    flex-direction: column;
}
.body_right{
    width: 800px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
img{
 width:100px;
 margin: 10px auto;
 border-radius: 50% ;
}
.title{
    width: 100%;
    height: 160px;
    border-radius:30px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 1s;
    color: #426696;
}
.title:hover{
    background-color:#e7faf3;
}
.item{
    flex: 1;
    border-radius:30px ;
    transition: all 1s;
    display: flex;
    justify-content: center;
    cursor: pointer;
}
.item>div{
    display: flex;
    width: 120px;
    justify-content:space-between;
    align-items: center;
}
.item>div>i{
  font-size: 30px;
}
.item>div>span{
  color: #426696;
  transition: all 1s;
  font-weight:bold ;
}
.item>div>span:hover{
  color: black;
}
</style>