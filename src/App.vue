<template>
<div>
  <navv></navv>

   <router-view></router-view>

   

</div>
    
</template>

<script>

import navv from "@/components/navv"
export default {
     components:{
      navv
     }
}
</script>

<style>
    *{
      margin: 0;
      padding: 0;
    }
</style>
