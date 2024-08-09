import React, {useCallback, useLayoutEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MainLayout from '../layouts/Main.layout';
import AntIcon from 'react-native-vector-icons/AntDesign';
import AwIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {getWt} from '../utils/comon.util';
import {currentWtType} from '../model';
import {stylesCommmon} from '../stylesCommon';
const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

export default function SearchScreen() {
  const navigation = useNavigation<any>();
  const [hsList, setHsList] = useState<any[]>([]);
  const handleSubmit = useCallback(
    ({
      nativeEvent: {text, ...rest},
    }: {
      nativeEvent: {
        text: string;
      };
    }) => {
      console.log('after submit', {text});
      navigation.navigate('Home', {
        city: text,
        lng: false,
        lat: false,
      });
    },
    [],
  );

  useLayoutEffect(() => {
    console.log(getWt());

    setHsList(getWt());
  }, []);

  return (
    <MainLayout>
      <View style={styles.wrapper_search}>
        <View style={styles.search_input}>
          <TouchableWithoutFeedback onPress={navigation.goBack}>
            <AntIcon name="arrowleft" size={24} />
          </TouchableWithoutFeedback>
          <TextInput
            style={styles.input_cs}
            placeholder="Search here"
            autoFocus
            onSubmitEditing={handleSubmit}
          />
          <AwIcon name="microphone" size={24} />
        </View>
        <View style={styles.history_cs}>
          <Text style={styles.title_hs}>Rencent search</Text>
          <ScrollView style={styles.list_hs}>
            {hsList.map((item: currentWtType) => (
              <TouchableWithoutFeedback key={item.name} onPress={navigation.navigate.bind(null,{
                name: "Home",
                params: {city: item.name}
              })}>
                <View style={styles.detail_hs}>
                  <Text
                    style={[stylesCommmon.textBold, , stylesCommmon.textBase]}>
                    {item.name}
                  </Text>
                  <View style={[stylesCommmon.flexRow]}>
                    <Image
                      style={styles.icon_cloud}
                      source={{
                        uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
                      }}
                    />
                    <Text
                      style={[stylesCommmon.textBold, stylesCommmon.textSmall]}>
                      {item.main.temp_max}°C /
                    </Text>
                    <Text
                      style={[stylesCommmon.textBold, stylesCommmon.textSmall]}>
                      {item.main.temp_min}°C
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </ScrollView>
        </View>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  wrapper_search: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    right: -21,
    left: -21,
    borderRadius: 15,
    padding: 21,
  },
  search_input: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingStart: 4,
    paddingEnd: 8,
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 4}, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.28, // Shadow radius
    elevation: 5,
  },
  input_cs: {
    padding: 15,
    flex: 1,
  },
  history_cs: {
    marginTop: 41,
  },
  title_hs: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 18,
  },
  list_hs: {
    maxHeight: 250,
  },
  detail_hs: {
    fontSize: 27,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon_cloud: {
    width: 43,
    marginRight: 20,
  },
});
