import HYRquest from '../requset/index'

export function getCityAll(){
    return HYRquest.get({
        url:'/city/all'
    })
}