import Vue from "vue";
import Router from "vue-router";
Vue.use(Router)
export default new Router({
    routes:[
        {path:"/",component:()=>import("@/components/index.vue"),
        children:[
            {path:"/",component:()=>import("@/components/my.vue")},
            {path:"/study",component:()=>import("@/components/mystudy.vue")},
            {path:"/likes",component:()=>import("@/components/likes.vue")},
            {path:"/promise",component:()=>import("@/components/promise.vue")},
            {path:"/call",component:()=>import("@/components/call.vue")},
        ]
    },
    {path:"/skills",component:()=>import("@/components/skills.vue")},
    {path:"/exp",component:()=>import("@/components/exp.vue")},
    {path:"/other",component:()=>import("@/components/other.vue")},
    ]
})