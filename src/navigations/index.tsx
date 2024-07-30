
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, {FC} from "react"
import HomeScreen from "../screens/Home.Screen"
import DetailScreen from "../screens/Detail.Screen"
import SearchScreen from "../screens/Search.Screen"
import NotiScreen from "../screens/Noti.Screen"

interface AppNavigationContainerProps {
    children ?: any
}

const Stack = createNativeStackNavigator()
const AppNavigationContainer: FC<AppNavigationContainerProps> =  ({children})=>  {


    return <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Notification" component={NotiScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default AppNavigationContainer