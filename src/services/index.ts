import { Api_key } from './../../../Mobile-ESS/src/const/app.const';
import axios from "axios"

const weatherService = axios.create({
    baseURL: process.env.SERVICE_WEATHER,
    params: {
        appid: process.env.API_KEY
    }
    
})

weatherService.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log(config);
    
    return config;
  }
)

weatherService.interceptors.response.use(function(response) {
return response.data
})

export default weatherService