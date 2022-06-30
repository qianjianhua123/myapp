<template>
  <div class="big">
    <div class="skills_body">
      <div class="outdv">
        
        <div>
          <div>
             <h3>1.HTML/CSS</h3>
          <ul>
            <li>精通H5C3,并能高精度还原设计稿,了解H5/C3语义化标签，动画及响应式布局等</li>
            <li>精通flex,grid布局,用其完成各种复杂页面的设计</li>
            <li>熟练使用常见CSS框架,如:Element-Ui,BootStrap等</li>
          </ul>
          </div>
         
         <div>
           <h3>2.Javascript/Typescript</h3>
          <ul>
            <li>熟练使用原生js,熟悉掌握Dom,Bom操作</li>
            <li>熟悉强类型语言ts,并能使用vue3+ts开发项目</li>
            <li>熟悉es6新特性,如:箭头函数:promise异步编程等</li>
            <li>熟练使用axios进行前后端交互,了解前头端交互过程</li>
            <li>了解jquery基本语法</li>
          </ul>
         </div>
         
         <div>
               <h3>3.Vue2/Vue3/Uniapp</h3>
          <ul>
            <li>了解vue框架核心原理,mvvm模式及双向数据绑定</li>
            <li>熟练使用vue指令,如:v-for,v-if,v-on,v-model等</li>
            <li>熟练使用vue全家桶:vuevue-cli,vueRouter,Vuex,Axios等搭建项目</li>
            <li>熟练使用vue2/vue3开发项目</li>
            <li>熟练使用uniapp跨平台框架,并能开发项目</li>
          </ul>
         </div>
         
        </div>

        <div>

          <div>
             <h3>4.React/Taro框架</h3>
              <ul>
                <li>熟练使用jsx语法,了解jsx语法规范,如:闭合标签,className等</li>
                <li>熟练使用类式组件,掌握类式组件的三大属性state,props,ref</li>
                <li>熟练使用mobx实现全局状态管理</li>
                <li>熟练使用函数式组件,掌握useState,useEffect,useRef等hook函数</li>
                <li>熟练使用react-router,并能在函数组件和类似组件快速搭建路由</li>
                <li>熟练使用taro框架,并开发项目</li>
              </ul>
          </div>
           
             
             <div>
                <h3>5.微信小程序</h3>
              <ul>
                <li>熟练使用微信开发者工具</li>
                <li>熟练使用小程序自带的各种组件和api,如:tabBar,swiper等</li>
                <li>对小程序页面和组件有着深刻的理解，并能快速搭建项目</li>
                <li>了解小程序的常用配置</li>
              </ul>
             </div>
              
            
            <div>
                   <h3>6. 其他</h3>
              <ul>
                <li>了解webpack模块打包工具</li>
              </ul>
            </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../jquery-1.8.2";
export default {
  methods: {
    foo() {
      $(".skills_body").slideDown(500, function () {});
    },
  },
  mounted() {
    this.foo();
  }
};
</script>

<style scoped>
.big {
  height: calc(100vh - 60px);
  background-color: rgb(90, 243, 217);
  overflow: hidden;
}
.skills_body {
  height: calc(100vh - 60px);
  background-color: rgb(90, 243, 217);
  display: none;
  overflow: hidden;
}
.outdv {
  width: 90vw;
  margin: 24px auto;
  height: calc(100% - 48px);
  background-color: #c9eddf;
  border-radius: 30px;
  display: flex;
  color:black;
}
 .outdv>div{
    padding: 30px;
    flex: 1;
    height: 100%;
}
.outdv>div>h3{
    margin: 10px 0px;
}
.outdv>div>div>h3{
    margin: 8px 0px;
}
h3{
  
}



</style>