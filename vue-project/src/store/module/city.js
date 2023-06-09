import { defineStore } from "pinia";
import { getCityAll } from "@/services";

const useCityStore = defineStore("city",{
    state:()=>({
        allCities:{},
        currentCity:{cityName:'深圳'}
    }),
    actions:{
        async fetchAllcitiesData(){
            const res = await getCityAll()
            this.allCities = res.data
        }
    }
})

export default useCityStore