import { MMKV } from 'react-native-mmkv'
import { currentWtType } from '../model'

export const storage = new MMKV()

export const getWt = ():any[]  => {
    const data = storage.getString("weather")
    if(!data) return []
    return JSON.parse(data) 
}

export const setWt = (value:currentWtType) => {
    let currentData = getWt()
    if(currentData.length == 0) {
        storage.set("weather",JSON.stringify([value]))
    }else {
        let find = currentData.find((wt: currentWtType) => wt.name == value.name)
        if(find) storage.set("weather",JSON.stringify(currentData.map((wt:currentWtType) => wt.name == value.name  ? value : wt )))
        else storage.set("weather",JSON.stringify([value,...currentData]))
    }
}

