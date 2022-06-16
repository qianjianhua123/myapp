<template>
  <div class="big">
    <div class="skills_body">
      <div class="outdv">
        <div class="text" v-show="num == 1">
          <span><h2>张飞猪肉科技有限公司</h2></span>
          <span>2018年01月 - 2019年01月</span>
          <h3>实习</h3>
          <ul>
            <li>根据 UI 设计稿，使用 CSS/HTML 高度还原静态页面</li>
            <li>
              使用Bootstrap完成页面的响应式处理、优化以及测试完成Vue项目的开发与维护
            </li>
            <li>根据需求实现各种交互效果，配合测试部完成相关 BUG 的修改</li>
          </ul>
        </div>

        <div class="text" v-show="num == 2">
          <span><h2>关羽卖酒科技有限公司</h2></span>
          <span>2019年02月 - 2022年03月</span>
          <h3>web前端&nbsp;&nbsp;技术部</h3>
          <h4>项目名称</h4>
          <span>特价商城</span>
          <h4>项目介绍</h4>
          <span>
            特价商城是一款商城类的应用,主要有首页,精选,购物车,我的四个模块,在线上支付非常普及的
            今天,性价比成了购物的非常重要的因素,特价商城的宗旨就是为客户提供物美价廉的商品.
          </span>

          <h4>使用的技术栈</h4>
          <span> Vue2+uniapp+axios+Vuex </span>
          <h4>项目职责</h4>
          <ul>
            <li>负责框架的搭建以及常用功能的封装</li>
            <li>负责首页以及精选页面的页面搭建和逻辑实现</li>
            <li>使用axios库进行前后端的数据交互</li>
            <li>使用Vuex对全局的状态进行管理</li>
          </ul>
        </div>

        <div class="text" v-show="num == 3">
          <h4>项目名称</h4>
          <span>仁心药店</span>
          <h4>项目介绍</h4>
          <span>
            仁心药店是一个医药类的积分商城网站，分为首页、积分活动、积分秒杀、积分商品分类、新
            品推荐等模块，用户可以 在线查询、浏览、收藏、购买指定的商品，
            积分兑换后可以查看历史积分记录、积分获取记录 和积分兑换记录
          </span>

          <h4>使用的技术栈</h4>
          <span> React+AntDesign+Mobx+react-dom-router+axios </span>
          <h4>项目职责</h4>
          <ul>
            <li>网站的 UI 设计、页面代码的编写。使用react-cli脚手架创建项目</li>
            <li>使用 react-router 实现项目中各个页面的路由跳转</li>
            <li>
              使用axios获取后台数据,使用 async 和 await
              进行同步处理请求,并实现前端页面的数据渲染
            </li>
            <li>使用 Ant-Design 组件库完成网站的响应式布局</li>
            <li>使用Mobx来管理共享数据。</li>
          </ul>
        </div>

        <div class="text" v-show="num == 4">
          <h4>项目名称</h4>
          <span>富豪商城后台管理应用</span>
          <h4>项目介绍</h4>
          <span>
            富豪商城后台管理应用,是用来监测管理富豪商城每日的销售情况,进货情况,用户口碑,
            用户反 馈,特价商品处理等事项,主要有首页,数据,设置三个模块
          </span>

          <h4>使用的技术栈</h4>
          <span> Vue+Element-UI+Vuex+VueRouter+axios+Echarts </span>
          <h4>项目职责</h4>
          <ul>
            <li>负责应用的整体架构与实现</li>
            <li>负责所有页面的搭建与优化</li>
            <li>参与产品的设计阶段,与产品经理讨论功能的可行性</li>
            <li>使用VueRouter实现项目中各个页面的路由跳转</li>
            <li>使用axios获取后台数据,并将数据渲染到页面</li>
            <li>使用Element-UI组件库完成应用的布局</li>
          </ul>
        </div>

        <div class="btn">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="40"
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