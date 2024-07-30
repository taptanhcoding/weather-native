import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/EvilIcons';
import FtIcon from "react-native-vector-icons/Feather"
import IoIcon from "react-native-vector-icons/Ionicons"
import MainLayout from '../layouts/Main.layout';

export default function HomeScreen({navigation, route}: any) {
  return (
    <MainLayout>
      <View style={styles.header}>
        <View style={styles.inner_header}>
          <Icon name="location" size={24} color="#fff" />
          <Text style={[styles.text, {paddingLeft: 10, paddingRight: 10}]}>
            Ha Noi
          </Text>
          <Icon name="chevron-down" size={24} color="#fff" />
        </View>
        <View style={styles.noti}>
          <View style={styles.dot_box}></View>
          <Icon color="#fff" size={24} name="bell"></Icon>
        </View>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.icon_cloud}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View style={styles.content_weather}>
            <Text style={styles.time_st}>
              Today, 12 September
            </Text>
            <Text style={styles.temp_st}>
              29°
            </Text>
            <Text style={styles.detail_temp}>
              Cloudy
            </Text>
            <View style={styles.row_dt}>
              <View style={[styles.flex_row]}>
                <FtIcon name="wind" color={"#fff"} size={20}/>
                <Text  style={[styles.text_white]}>Wind</Text>
              </View>
              <Text  style={[styles.text_white]}>|</Text>
              <Text  style={[styles.text_white]}>10 km/h</Text>
            </View>
            <View style={styles.row_dt}>
              <View style={[styles.flex_row]}>
                <IoIcon name="water-outline" color={"#fff"} size={20}/>
                <Text style={[styles.text_white]}>Hum</Text>
              </View>
              <Text  style={[styles.text_white]}>|</Text>
              <Text  style={[styles.text_white]}>54%</Text>
            </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>Button report</Text>
      </View>
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
    marginTop:13,
    marginBottom:6,
    color:"#fff",

    flexDirection: "row",
    justifyContent: "space-around"
  },
  footer: {},
  text: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 500,
  },
});
