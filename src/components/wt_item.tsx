import React, {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {currentWtType} from '../model';
import dayjs from 'dayjs';
import { stylesCommmon } from '../stylesCommon';

function WtItem({data}: {data: currentWtType}) {
    
  return (
    <View style={[styleItem.wrapper, dayjs(data.dt_txt).format('HH') == dayjs().format("HH") && styleItem.wrapper_now,stylesCommmon.justtifyAround ]}>
      <Text style={styleItem.text}>{Math.round(data.main.temp)}°C</Text>
      <Image
        style={styleItem.icon}
        source={{
          uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        }}
      />
      <Text numberOfLines={1} style={styleItem.text}>{dayjs(data.dt_txt).format('HH:mm')}</Text>
    </View>
  );
}

const styleItem = StyleSheet.create({
  wrapper: {
    width: 68,
    height: 143,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12
  },
  wrapper_now: {
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgba(255,255,255,0.7)',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  text: {
    fontSize: 14,
    color: '#fff',
  },
  icon: {
    width:40,
    height:40
  },
});

export default memo(WtItem);
