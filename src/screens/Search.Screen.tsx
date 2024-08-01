import React from 'react';
import {SectionList, StyleSheet, Text, TextInput, View} from 'react-native';
import MainLayout from '../layouts/Main.layout';
import AntIcon from 'react-native-vector-icons/AntDesign';
import AwIcon from 'react-native-vector-icons/FontAwesome';

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
  return (
    <MainLayout>
      <View style={styles.wrapper_search}>
        <View style={styles.search_input}>
          <AntIcon name="arrowleft" size={24} />
          <TextInput style={styles.input_cs} placeholder="Search here" />
          <AwIcon name="microphone" size={24} />
        </View>
        <View style={styles.history_cs}>
          <Text style={styles.title_hs}>Rencent search</Text>
          <SectionList
          style={styles.list_hs}
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <View style={styles.detail_hs}>
                <Text>{item}</Text>
              </View>
            )}
            // renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
          />
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
    backgroundColor:"#fff",
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingStart:4,
    paddingEnd:8,
    shadowColor: '#000',  // Shadow color
    shadowOffset: { width: 0, height: 4 },  // Shadow offset
    shadowOpacity: 0.25,  // Shadow opacity
    shadowRadius: 3.28,  // Shadow radius
    elevation: 5,
  },
  input_cs: {
    padding: 15,
    flex: 1,
  },
  history_cs: {
    marginTop: 41
  },
  title_hs: {
    fontWeight: "bold",
    fontSize:16,
    marginBottom: 18
  },
  list_hs: {
    maxHeight: 250
  },
  detail_hs: {
    fontSize: 27,
    marginTop:20,
    marginBottom: 20,
    fontWeight: "bold"
  }
});
