import {createRouter,createWebHashHistory} from 'vue-router';

const router = createRouter({
    history:createWebHashHistory(),
    // 映射关系
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:()=>import("@/views/home/home.vue"),
            meta:{
                isAuth:false
            }
        },
        {
            path:'/favor',
            component:()=>import("@/views/favor/favor.vue"),
            meta:{
                isAuth:false
            }
        },
        {
            path:'/order',
            component:()=>import("@/views/order/order.vue"),
            meta:{
                isAuth:false
            }
        },
        {
            path:'/message',
            component:()=>import("@/views/message/message.vue"),
            meta:{
                isAuth:false
            }
        },
        {
            path:'/city',
            component:()=>import("@/views/city/city.vue"),
            meta:{
                isAuth:false
            }
        },
        {
            path:'/search',
            component:()=>import("@/views/search/search.vue"),
            meta:{
                isAuth:true
            }
        }

    ]
});

export default router
