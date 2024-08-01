import weatherService from "../services";

const CURRENT_WEATHER='/weather'

const CURRENT_DETAIL="/forecast"

export const wt= {
    current_wt: async(params:any) => {
        return weatherService.get(CURRENT_WEATHER,{
            params: {...params,units: "metric"}
        })
    },
    detailt_wt: async(params:any) => {
        return weatherService.get(CURRENT_DETAIL,{
            params: {...params,units: "metric"}
        })
    },
}