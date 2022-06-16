<template>
  <div class="big">
    <div class="skills_body">
      <div class="outdv">
        <div class="line"></div>
        <div>
          <h3>1.html/css</h3>
          <ul>
            <li>精通 HTML5+CSS3 布局、并能够结合 web 标准,精准还原设计图</li>
            <li>精通flex布局,并能使用flex布局完成各种复杂页面的设计</li>

            <li>
              熟练使用常见的css框架,如element-ui,vant-ui,antdesign,bootstrap
            </li>
            <li>熟练使用css预处理器:less,sass</li>
          </ul>

          <h3>2.javascript/typescript</h3>
          <ul>
            <li>精通原生 JavaScript,熟练掌握DOM、BOM 操作</li>
            <li>熟悉强类型语言typescript,并能使用vue3+typescript开发项目</li>
            <li>熟悉es6新增语法如let,const,箭头函数等</li>
            <li>熟练使用axios进行前后端交互</li>
            <li>了解过jquery的基本使用</li>
          </ul>

          <h3>3.Vue2/Vue3框架</h3>
          <ul>
            <li>熟练使用Vue常用指令,如v-if,v-for,v-on,v-model</li>
            <li>熟练使用Vue状态管理工具Vuex</li>
            <li>对Vue的核心思想响应式原理,组件系统有深刻的理解</li>
            <li>能熟练使用Vue2和Vue3进行项目的开发</li>
            <li>了解Vue2和Vue3的不同点</li>
          </ul>
        </div>

        <div>
           <div>
              <h3>4.React框架</h3>
              <ul>
                <li>掌握jsx语法规范,并能熟练使用</li>
                <li>能熟练使用类式组件进行项目开发,对类式组件中this的指向有着比较深刻的理解</li>
                <li>熟练使用类式组件三大属性state,props,ref</li>
                <li>能熟练使用状态管理工具redux</li>
                <li>能熟练使用函数式组件,对函数式组件常用的hooks有比较深入的理解,如 useState,useEffect,useRef等</li>
                <li>熟练使用状态管理工具Mobx</li>
              </ul>
              
              <h3>5.微信小程序</h3>
              <ul>
                <li>熟练使用微信开发者工具</li>
                <li>深刻理解小程序页面和组件的概念,并能快速搭建小程序界面</li>
                <li>熟练使用小程序自带的各种组件以及Api</li>
                <li>对小程序的常见配置比较了解</li>
              </ul>

              <h3>6.跨平台框架uniapp/Taro</h3>
              <ul>
                <li>熟练使用uniapp,Taro跨平台框架开发项目</li>
              </ul>

              <h3>7.其他</h3>
              <ul>
                <li>了解webpack打包工具</li>
                <li>了解Node.js进行服务端开发</li>
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
  width: 1200px;
  margin: 24px auto;
  height: calc(100% - 48px);
  background-color: #c9eddf;
  border-radius: 30px;
  display: flex;
  position: relative;
  color:black;
}
 .outdv>div{
    flex: 1;
    padding: 20px;
}
.outdv>div>h3{
    margin: 10px 0px;
}
.outdv>div>div>h3{
    margin: 8px 0px;
}
.outdv>div>div{
    /* padding-left: 100px;
    border-left: 3px dashed #2867ce; */
}
.outdv>div:nth-child(1){
   
}
.line{
    position: absolute;
    height: 416px;
    border-left:3px dashed  #2867ce;
    top: 30px;
    left: 540px;
    
}



</style>