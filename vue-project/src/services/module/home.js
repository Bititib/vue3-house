import hyRequset from '@/services/requset/index.js'
export function getHotSuggests(){
    return hyRequset.get({url:"home/hotSuggests"})
}
export function getCategories(){
    return hyRequset.get({url:"home/categories"})
}
export function getHouseList(currentPage){
    return hyRequset.get({
        url:"home/houselist",
        params:{
            page:currentPage
        }
    })
}