import { onMounted,onUnmounted, ref } from 'vue'
import { throttle } from 'underscore'

export default function useScroll( ){
    const isRearchBottom = ref(false)
    const clientHeight = ref(0)
    const scrollTop = ref(0)
    const scrollHeight = ref(0)
    // 监听滚动事件
    const scrollListenerHandler = throttle(()=>{
        // 获取窗口高度
        clientHeight.value = document.documentElement.clientHeight
        // 滚动条高度
        scrollTop.value = document.documentElement.scrollTop
        // 文档总高度
        scrollHeight.value = document.documentElement.scrollHeight
        if(clientHeight.value + scrollTop.value >= scrollHeight.value) {
            isRearchBottom.value = true
        } 
    },100)

    onMounted(()=>{
        window.addEventListener('scroll',scrollListenerHandler)
    })

    onUnmounted(()=>{
        window.removeEventListener('scroll',scrollListenerHandler)
    })
    return { isRearchBottom ,scrollTop,clientHeight,scrollHeight}
}