import {StyleSheet,StatusBar ,Platform} from "react-native";


export default StyleSheet.create({
    container: {
        padding: Platform.OS === "android" ? StatusBar.currentHeight: 0,
        flex: 1
    },

    loader: {
        marginVertical: 16,
        alignItems: "center"
    }
});