import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import HomeScreen from '../screens/Home.Screen';
import DetailScreen from '../screens/Detail.Screen';
import SearchScreen from '../screens/Search.Screen';
import NotiScreen from '../screens/Noti.Screen';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
interface AppNavigationContainerProps {
  children?: any;
}

const Stack = createNativeStackNavigator();
const AppNavigationContainer: FC<AppNavigationContainerProps> = ({
  children,
}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
          initialParams={{
            city: 'Ha Noi',
            lng: false,
            lat: false,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerShown: false,
            // headerRight: () => (
            //   <TouchableWithoutFeedback>
            //     <AntIcon name="setting" size={24} color={'#fff'} />
            //   </TouchableWithoutFeedback>
            // ),
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={NotiScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
