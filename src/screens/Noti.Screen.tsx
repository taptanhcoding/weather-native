import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MatIcon from "react-native-vector-icons/MaterialIcons"
import { stylesCommmon } from '../stylesCommon';
export default function NotiScreen() {
  return (
    <View>
      <Text style={stylesNoti.header_title}>Your notification</Text>
      <View style={stylesNoti.new_st}>
        <Text style={stylesNoti.text_new}>New</Text>
        <View style={[stylesCommmon.flexRow,stylesCommmon.itemsCenter,stylesNoti.item_new,stylesCommmon.justtifyBetween]}>
            <MatIcon name="sunny" size={22} color={"#444E72"}/>
            <View style={[stylesNoti.main_text]}>
                <Text style={[stylesNoti.text14]}>10 minutes ago</Text>
                <Text style={[stylesCommmon.textBold,stylesNoti.text14]}>A sunny day in your location, consider wearing your UV protection</Text>
            </View>
            <MatIcon name="keyboard-arrow-down" size={22}  color={"#444E72"}/>
        </View>
      </View>
    </View>
  );
}

const stylesNoti = StyleSheet.create({
  text14: {
    fontSize:14,
    color: '#444E72',
  },
  colorNoti: {
    color: '#444E72',
  },
  header_title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 30,
    color: '#444E72',
  },
  new_st: {},
  text_new: {
    fontSize: 12,
    marginLeft: 30,
    color: '#444E72',
  },
  item_new: {
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:30,
    paddingRight:30
  },
  main_text: {
    width:"60%"
  }
});
