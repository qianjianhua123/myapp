<template>
<div class="big">
    <div class="skills_body">
        <div class="outdv">
            <h1>正在补充中<i class="el-icon-loading"></i></h1>
        </div>         
    </div>
</div>
</template>

<script>
import "../jquery-1.8.2"
export default {
    methods: {
    foo() {
      $(".skills_body").slideDown(500, function () {});
    },
  },
  mounted() {
    this.foo();
  },
}
</script>

<style scoped>
.big{
     height: calc(100vh - 60px);
    background-color: rgb(90, 243, 217);
    overflow: hidden;
}
   .skills_body{
    height: calc(100vh - 60px);
    background-color: rgb(90, 243, 217);
    display: none;
    overflow: hidden;
   }
   .outdv{
    width: 1200px;
    margin: 24px auto;
    height: calc(100% - 48px);
    background-color: #c9eddf;
    border-radius:30px ;
    color: #2867ce;
   }
</style>