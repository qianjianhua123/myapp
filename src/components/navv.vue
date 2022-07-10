<template>
     <div class="index_top">
            <div>
                <span v-for="(item,index) in list" @click="foo(index)" 
                :class="{'select unselect':num==index}" class="unselect">
                    <div>{{item.eng}}</div>
                   <h4>{{item.name}}</h4></p>
                </span>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return{
    list: [
        { name: "测试分支", eng: "Home" },
        { name: "我的主页", eng: "Home" },
        { name: "相关技能", eng: "Skills" },
        { name: "项目经验", eng: "Experience" },
        { name: "其他", eng: "Other" },
         { name: "11", eng: "Other" },
      ],
      num:0
        }
    },
  methods:{
    foo(index){
    this.num = index;
    switch (index) {
      case 0:
      this.$router.push("/") 
        break;
      case 1:
      this.$router.push("/skills") 
        break;

      case 2:
      this.$router.push("/exp") 
        break;


      case 3:
      this.$router.push("/other") 
        break;

      
    
    }
    }
    }

}
</script>

<style scoped>

   .index_top {
  height: 60px;
  background-color: rgb(98, 198, 180);
  display: flex;
  justify-content: center;
  align-items: center;
}

.index_top > div {
  width: 800px;
  height: 100%;
  display: flex;
  align-items: center;
}
.index_top > div > span:hover{
   background: rgb(222, 243, 240);
   color: rgb(66, 102, 150);
}
.unselect{
  height: 100%;
  flex: 1;
  cursor: pointer;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: all 1s;
}
.select{
  background: rgb(222, 243, 240);
   color: rgb(66, 102, 150);
}
</style>