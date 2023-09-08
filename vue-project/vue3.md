## 一 路由
### 安装路由
> npm install vue-router

### 配置路由
```js
    // index.js
    import { createRouter ,createwebHashHistroy} from 'vue-router'
    
    const router = createRouter({
        histroy:createwebHashHistroy(),
        routes:[
            // 以对象的形式写路由视图
            {
                path:'/',
                redirect:'/home' // 路由重定向
            }
            {
                path:'/home',
                // 该路由地址对应的视图,
                // 优化: 使用路由懒加载,减少项目加载时间
                component:()=>import("@/views/order/order.vue")
            }
        ]
    })

export default router

```
### 挂载路由
```js
    // main.js
    import router from 'index.js'
    // 以中间件是形式进行挂载
    createApp().use(router)
``` 
### 路由视图占位
```vue

    <!-- App.vue -->
    <template>
        <div>
            <RouterView />
        </div>
    </template>

```

## 二 状态 —— Pinia
> npm install pinia

### 创建pinia
```js
    // index.js
    import { createPinia } from 'pinia'

    const pinia = createPinia()

    export default pinia
```
### 创建片段
```js
    // city.js
    import { defineStore } from "pinia";

    const useCityStore = defineStore("city",{
        state:()=>({
            cities:[]
        }),
        actions:{

        }
    })

    export default useCityStore
```

### 注册Pinia
```js
    // main.js
    import pinia from '/store/index.js'

    create().use(pinia)
```

## vue中引入图片
### 静态引入
> 将图片路径写死
```vue
    <img src="@/assets/.../.png" alt="" />
```
### 动态引入

> 通过模板语法配合js使用
> vue不在支持require()方式引入
而是通过 new URL() 方法来引入图片
通过js写好一个URL解析函数,引入此函数

```vue
    <img :src="getAssetsURL(url)" alt=""/>

    <script>
    const getAssetsURL = (path) => {
        return new URL(path,import.mate.url).href
    }
    </script>
 这段代码执行的操作如下：

使用模板字符串 ../assets/${path} 构建了一个相对路径的 URL。${path} 是一个变量，表示要拼接到 URL 中的路径。
import.meta.url 是 ES 模块中的一个元数据属性，用于获取当前模块文件的 URL。在该代码中，它被用作基准 URL，将相对路径转换为绝对路径。
new URL() 构造函数接收两个参数：URL 字符串和基准 URL。它会将相对路径和基准 URL 结合起来，创建一个 URL 对象。
最后，通过访问 URL 对象的 href 属性，获取构建后的完整 URL 字符串。
例如，假设 path 的值为 image.jpg，import.meta.url 的值为 https://example.com/js/module.js，那么执行代码 new URL(../assets/${path}, import.meta.url).href 将返回 https://example.com/assets/image.jpg。
```
>请注意，@ 符号在 Vue 中通常用于引入模块、组件或文件，上述示例中的 @ 符号仅用于表示静态资源 URL 的占位符。您需要将其替换为实际的静态资源 URL。

> 使用 URL 对象时，需要考虑浏览器的兼容性。如果您的项目需要支持旧版浏览器，请使用 Polyfill 或其他相关方法来提供对 URL 对象的兼容性支持。

### new URL()
>new URL() 是 JavaScript 中的构造函数，用于创建一个 URL 对象。URL 对象用于解析、操作和构建 URL。

new URL() 的作用包括：

解析 URL：通过将 URL 字符串传递给 new URL() 构造函数，可以解析该 URL 并将其转换为 URL 对象。URL 对象提供了访问解析后的 URL 的各个部分的属性，如协议（protocol）、主机（host）、路径（pathname）、查询参数（search）等。

构建 URL：通过设置 URL 对象的属性，可以构建 URL 字符串。您可以设置 URL 对象的属性，如协议、主机、路径、查询参数等，然后通过访问 URL 对象的 href 属性获取构建后的 URL 字符串。

操作 URL：URL 对象提供了一些方便的方法和属性，用于操作 URL。例如，您可以使用 URL 对象的 searchParams 属性访问和操作查询参数，使用 hostname 属性获取主机名，使用 pathname 属性获取路径等。

#### new URL()案例
解析 URL：
```javascript
const urlString = 'https://www.example.com/path?param1=value1&param2=value2';
const url = new URL(urlString);
console.log(url.protocol); // 输出: "https:"
console.log(url.host); // 输出: "www.example.com"
console.log(url.pathname); // 输出: "/path"
console.log(url.searchParams.get('param1')); // 输出: "value1"
```
构建 URL：
```javascript
const url = new URL('https://www.example.com');
url.pathname = '/path';
url.searchParams.set('param1', 'value1');
console.log(url.href); // 输出: "https://www.example.com/path?param1=value1"
```
操作 URL：
```javascript
const url = new URL('https://www.example.com/search?query=example&page=1');
url.searchParams.append('sort', 'desc');
console.log(url.href); // 输出: "https://www.example.com/search?query=example&page=1&sort=desc"
url.searchParams.delete('page');
console.log(url.href); // 输出: "https://www.example.com/search?query=example&sort=desc"
```

## 使用 Vant UI 框架
> npm i vant // 下载最新版本的框架
具体看vant官网

### Vant tabbar的使用
```vue
<template>
    <div class="tarBar">
        <van-tabbar v-model="active" @click="item()">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="like-o">收藏</van-tabbar-item>
            <van-tabbar-item icon="friends-o">订单</van-tabbar-item>
            <van-tabbar-item icon="setting-o">信息</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(0);
const item = ()=>{
console.log(active.value) // 可以发现tabbar的切换是根据下标切换的
}
</script>
```

### 获取定位API
>  navigator.geolocation.getCurrentPosition()
接收两个回调函数做参数:第一个为成功的回调，第二个为失败的
```js
 navigator.geolocation.getCurrentPosition(res=>{
        console.log(res)
    },err =>{
        console.log(err)
    })
```
成功的结果
```json
    {
        coords: GeolocationCoordinates,
        accuracy: 148026.69067106617,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: 47.6055498,
        longitude: -122.3587698,
        speed: null,
        [[Prototype]]: GeolocationCoordinates,
        timestamp:1685684109176
    }
```

## 处理日期格式 - day.js

> npm install dayjs
格式
```js 
    // 获取时间进行格式化
    dayjs(new Date()).format("MM月DD日")

    // 获取时间段中的天数
    dayjs(endDay).diff(startDay,'day')
```

## 滚动条优化(节流)
引入对应的库underscore
> npm install underscore
```js
    import { throttled } from 'underscore'
    throttled(callback,delay)
```
