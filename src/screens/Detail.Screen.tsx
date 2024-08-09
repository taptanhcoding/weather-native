import React, { useLayoutEffect, useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MainLayout from '../layouts/Main.layout';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {stylesCommmon} from '../stylesCommon';
import weatherService from '../services';
import { currentWtType } from '../model';
import Wt_item from '../components/wt_item';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const today = new Date()
let month = months[today.getMonth()]
let day = today.getDate() > 10 ? today.getDate() : `0${today.getDate()}`
const Separator = () => <View style={stylesDetail.separator} />;

export default function DetailScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const {city} = route.params;
  const [listWt,setListWt] = useState<currentWtType[]>([])
  useLayoutEffect(() => {
    (async() => {
      const listData:any = await weatherService.get(`/forecast?q=${city}&units=metric`)
      setListWt(listData.list)
    })()
  },[city])
  return (
    <MainLayout>
      <View
        style={[
          stylesCommmon.flexRow,
          stylesCommmon.justtifyBetween,
          stylesCommmon.itemsCenter,
          stylesDetail.header,
        ]}>
        <TouchableWithoutFeedback onPress={navigation.goBack}>
          <View style={[stylesCommmon.flexRow, stylesCommmon.itemsCenter]}>
            <AntIcon name="left" size={24} style={[stylesCommmon.textWhite]} />
            <Text style={[stylesCommmon.textXl, stylesCommmon.textWhite]}>
              Back
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <AntIcon name="setting" size={24} style={[stylesCommmon.textWhite]} />
        </TouchableWithoutFeedback>
      </View>
      <View>
        <View
          style={[
            stylesCommmon.flexRow,
            stylesCommmon.justtifyBetween,
            stylesCommmon.itemsCenter,
          ]}>
          <Text
            style={[
              stylesCommmon.textWhite,
              stylesCommmon.textBase,
              stylesCommmon.textBold,
              stylesCommmon.textWhite,
            ]}>
            Today
          </Text>
          <Text
            style={[
              stylesCommmon.textWhite,
              stylesCommmon.textBase,
              stylesCommmon.textSBold,
              stylesCommmon.textWhite,
            ]}>
            {month},{day}
          </Text>
        </View>
        <FlatList 
        style={stylesDetail.wrappe}
          data={listWt}
          horizontal={true}
          ItemSeparatorComponent={Separator}
          renderItem={({item}) => <Wt_item data={item}/>}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </MainLayout>
  );
}

const stylesDetail = StyleSheet.create({
  wrappe: {
    marginTop: 32,
    marginBottom:32
  },
  header: {
    marginBottom: 10,
  },
  separator: {
    height: 10,
    width: 10 // Chiều cao của khoảng cách
  },

});
