import { Dimensions, Platform, StatusBar, NativeModules } from "react-native";
const { StatusBarManager } = NativeModules;

const { width, height } = Dimensions.get("window");

const metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    statusBarHeight: Platform.OS == 'android' ? StatusBar.currentHeight : StatusBarManager.HEIGHT,

}

export default metrics;