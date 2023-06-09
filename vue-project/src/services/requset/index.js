import axios from 'axios';
import { useMainStore } from '../../store/module/mian';
import { BASE_URL,TIMEOUT } from './config';

const mianStore = useMainStore()

class HYRequest {
    constructor(baseURL,timeout=10000){
        this.instance = axios.create({
            baseURL,
            timeout
        })
        // 设置
        // 请求拦截器
        this.instance.interceptors.request.use((config)=>{
            mianStore.isLoading = true
            return config
        },(error)=>{
            mianStore.isLoading = false
            return error
        })
        // 响应拦截器
        this.instance.interceptors.response.use(config=>{
            mianStore.isLoading = false
            return config
        },(error)=>{
            mianStore.isLoading = false
            return error
        }
        )
    }

    request(config){
        return new Promise((resolve,reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err =>{
                reject(err)
            })
        })
    }

    get(config){
        return this.request({...config,method:"get"})
    }

    post(config){
        this.request({...config,method:"post"})
    }

}

export default new HYRequest(BASE_URL,TIMEOUT)