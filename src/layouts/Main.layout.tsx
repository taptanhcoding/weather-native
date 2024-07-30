import LinearGradient from "react-native-linear-gradient";
import type {PropsWithChildren} from "react"
import { SafeAreaView, StyleSheet } from "react-native";

export default function MainLayout({children} :PropsWithChildren) {
    return <LinearGradient colors={['#47BFDF', '#4A91FF']}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 1}}
    style={styles.linearGradient}>
        <SafeAreaView style={styles.container} >{children}</SafeAreaView>
    </LinearGradient>
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingTop: 52,
        paddingBottom: 52,
        paddingLeft: 31,
        paddingRight: 31,
      },
      container: {
        flex: 1
      },
})