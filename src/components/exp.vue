<template>
  <div class="big">
    <div class="skills_body">
      <div class="outdv">
        <div class="text" v-show="num == 1">
          <span><h2>安徽言合数据科技有限公司</h2></span>
          <h3>项目名称:taro早餐商城</h3>
          <span>2022.04-2022.06</span>
          <h3>技术栈:<span>React Hooks+Taro+Axios+Mobx+TypeScrip</span></h3>
          <h4>项目描述:</h4>
          <div>
            早餐商城是一款专注早点的应用小程序,该小程序主要有首页,分类,订单,购物车,我的四个页面, 
            在如今内卷的时代,早餐商城致力于解决上班族和学生们赶时间不吃早餐的坏习惯,让人们的生活更加方便。
          </div>
          <h4>项目职责</h4>
          <ul>
            <li>负责项目的搭建以及常用组件的一些封装</li>
            <li>
              负责首页以及购物车的页面的页面实现以及逻辑实现
            </li>
            <li>使用 taro-navigateTo 实现项目中的各个路由页面跳转</li>
            <li>使用 axios 库进行前后端的数据交互</li>
            <li>使用 mobx 管理全局状态，实现组件间的通信</li>
          </ul>
        </div>

        <div class="text" v-show="num == 2">
          <span><h2>安徽言合数据科技有限公司</h2></span>
          <h3>项目名称:优品订单管理系统</h3>
          <span>2021.12-2022.04</span>
           <h3>技术栈:Vue+Element-UI+Vuex+VueRouter+axios+Echarts</h3>
         
          <h4>项目描述</h4>
          <span>
           优品订单管理系统是专注管理和整理商品的订单以及用户情况,一共由首页,订单管理,用户管理, 我的四个模块功能,
           样式主要使用了大量的 Element-UI 的组件和 api,
           以及引入了 Echarts 的数据图表,管理员可以高效的管理订单分类以及用户情况
          </span>

          <h4>项目职责</h4>
          <ul>
            <li>负责整个项目的搭建以及常用组件的一些封装</li>
            <li>负责管理员权限，订单分类，用户管理的部分逻辑</li>
            <li>负责将数据使用 echart 图表展示出来</li>
            <li>使用 element-ui 框架完成订单管理以及用户管理的分页样式</li>
            <li>使用 vue-router 实现各个页面路由跳转</li>
            <li>使用 axios 库进行前后端的数据交互</li>
            <li>使用 vuex 管理全局状态，实现组件间的通信</li>
          </ul>
        </div>

        <div class="text" v-show="num == 3">
          <span><h2>安徽言合数据科技有限公司</h2></span>
          <h3>项目名称:伟业商城</h3>
          <span>2021.09-2021.12</span>
           <h3>技术栈:tabBar+swiper+flex+request+setStorage</h3>
         
          <h4>项目描述</h4>
          <span>
          伟业商城是一款线上购物平台,主要有首页,会员商品,折扣商品,我的四个模块,
          如今线上购物非常普及,伟业商城就是为用户高效的筛选心仪商品,提供便捷线上购物平台
          </span>

          <h4>项目职责</h4>
          <ul>
            <li>负责项目的搭建以及常用组件的一些封装</li>
            <li>负责首页以及各个分页的页面布局</li>
            <li>负责购物车的一些逻辑处理</li>
            <li>使用 wx.navigateTo 实现路由跳转</li>
            <li>使用 wx..request 实现数据请求</li>
          </ul>
        </div>

       

        <div class="btn">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="30"
            @current-change="select"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../jquery-1.8.2";
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    select(index) {
      console.log(index);
      this.num = index;
    },
    foo() {
      $(".skills_body").slideDown(500, function () {});
    },
  },
  mounted() {
    this.foo();
  },
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
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}
.text {
  width: 800px;
  height: 400px;
  margin: 20px 0px;
  padding: 30px;
  overflow: hidden;
}
.text h2 {
  margin-bottom: 10px;
}
.text h3 {
  margin: 10px 0px;
}
.text li {
  margin: 5px 0px;
}
.text h4 {
  margin: 5px 0px;
}
</style>