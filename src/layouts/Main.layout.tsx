import LinearGradient from "react-native-linear-gradient";
import type {PropsWithChildren} from "react"
import { SafeAreaView, StyleSheet } from "react-native";

export default function MainLayout({children} :PropsWithChildren) {
    return <LinearGradient colors={['#47BFDF', '#4A91FF']}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 1}}
    style={stylesLayout.linearGradient}>
        <SafeAreaView style={stylesLayout.container} >{children}</SafeAreaView>
    </LinearGradient>
}

export const stylesLayout = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingTop: 52,
        paddingBottom: 52,
        paddingLeft: 21,
        paddingRight: 21,
      },
      container: {
        flex: 1
      },
})