import React, { memo, useEffect, useState } from 'react';
import {Button, Image, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import FtIcon from "react-native-vector-icons/Feather"
import IoIcon from "react-native-vector-icons/Ionicons"
import MainLayout from '../layouts/Main.layout';
import { currentWtType } from '../model';
import {wt} from '../apis/main'
import type { AxiosResponse, ResponseType } from 'axios';
 function HomeScreen({navigation, route}: any) {
  const [currentWt,setCurrentWt] = useState<currentWtType | undefined>()
  useEffect(() => {
    (async() => {
      try {
        let crWt: AxiosResponse<currentWtType,any> = await wt.current_wt({q: "Ha Noi"})
        setCurrentWt(crWt as any)
        
      } catch (error) {
        console.log("error",error);
        
      }
    })()
  },[])

  return (
    <MainLayout>
      {currentWt ? <>
        <View style={styles.header}>
        <TouchableWithoutFeedback  onPress={() => {
        navigation.push("Search")
       }}>
          <View style={styles.inner_header}>
            <Icon name="location" size={24} color="#fff" />
            <Text style={[styles.text, {paddingLeft: 10, paddingRight: 10}]}>
              Ha Noi
            </Text>
            <Icon name="chevron-down" size={24} color="#fff" />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.noti}>
          <View style={styles.dot_box}></View>
          <Icon color="#fff" size={24} name="bell"></Icon>
        </View>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.icon_cloud}
          source={{
            uri: `https://openweathermap.org/img/wn/${currentWt.weather[0].icon}.png`,
          }}
        />
       <TouchableWithoutFeedback onPress={() => {
        navigation.push("Detail",{project_id:1,customer_name:"chuyen"})
       }}>
          <View style={styles.content_weather}>
              <Text style={styles.time_st}>
                Today, 12 September
              </Text>
              <Text style={styles.temp_st}>
                {currentWt.main.temp}°
              </Text>
              <Text style={styles.detail_temp}>
                {currentWt.weather[0].main}
              </Text>
              <View style={styles.row_dt}>
                <View style={[styles.flex_row]}>
                  <FtIcon name="wind" color={"#fff"} size={20}/>
                  <Text  style={[styles.text_white]}>Wind</Text>
                </View>
                <Text  style={[styles.text_white]}>|</Text>
                <Text  style={[styles.text_white]}>{currentWt.wind.speed} km/h</Text>
              </View>
              <View style={styles.row_dt}>
                <View style={[styles.flex_row]}>
                  <IoIcon name="water-outline" color={"#fff"} size={20}/>
                  <Text style={[styles.text_white]}>Hum</Text>
                </View>
                <Text  style={[styles.text_white]}>|</Text>
                <Text  style={[styles.text_white]}>{currentWt.main.humidity}%</Text>
              </View>
          </View>
       </TouchableWithoutFeedback>
      </View>
      <View style={styles.footer}>
        <TouchableHighlight>
          <View style={[styles.flex_row,styles.button_ft]}>
            <Text>Forecast report</Text>
            <FtIcon name="chevron-up" size={24}/>
          </View>
        </TouchableHighlight>
      </View>
      
      </>: <View>
        <Text>
          Can not find you location weather.
        </Text>
      </View> }
      
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  text_white: {
    color: "#fff"
  },
  flex_row: {
    flexDirection: "row"
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inner_header: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 30,
    color: '#fff',
  },
  noti: {
    position: 'relative',
  },
  dot_box: {
    position: 'absolute',
    right: 4,
    zIndex: 99,
    backgroundColor: 'red',
    borderRadius: 100,
    width: 8,
    height: 8,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon_cloud: {
    marginBottom: 62,
    marginTop:62,
    width: 120,
    height:120
  },
  content_weather: {
    width:353,
    height:335,
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(255,255,255,0.7)",
    backgroundColor: "rgba(255,255,255,0.3)",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  time_st: {
    color:"#fff",
    fontSize:18

  },
  temp_st: {
    color:"#fff",
    fontSize: 100

  },
  detail_temp: {
    color:"#fff",
    fontSize:24,
    marginTop: 13,
    marginBottom:13

  },
  row_dt: {
    width: "40%",
    marginTop:13,
    marginBottom:6,
    color:"#fff",

    flexDirection: "row",
    justifyContent: "space-between"
  },
  footer: {},
  button_ft:{
    backgroundColor: "#fff",
    paddingTop:18,
    paddingBottom:18,
    paddingLeft:27,
    paddingRight:27,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    fontSize:28,
    width:220,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  text: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 500,
  },
});


export default memo(HomeScreen)