import React from 'react'
import { Button, Text, View } from 'react-native'

export default function DetailScreen({navigation,route}:any) {
    const {project_id,customer_name} = route.params
  return (
    <View>
      <Text>detailPage {JSON.stringify(project_id)}-{JSON.stringify(customer_name)}</Text>
      <Button title='push home' onPress={() => navigation.push("Home")}/>
      <Button title='goback home' onPress={() => navigation.navigate("Home",{
        page: "detail"
      })}/>
      <Button title='new params' onPress={() => navigation.setParams({project_id:Math.floor( Math.random()*100),customer_name:"chuyen it"})}/>
    </View>
  )
}
