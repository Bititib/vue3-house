import HYRquest from '../requset/index';

export function getDetailInfos(houseId){
    return HYRquest.get({
        url:'/detail/infos',
        params:{
            houseId,
        },
    })
}