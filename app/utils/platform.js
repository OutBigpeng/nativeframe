import React from 'react';
import { Platform, Dimensions, PixelRatio } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS; 
const isIphoneX =
platform === "ios" && (deviceHeight === 812 || deviceWidth === 812 || deviceHeight === 896 || deviceWidth === 896);

export default {
    version:'1.0.0',// DeviceInfo.getVersion(),
    isIphoneX,  //是否为iphonex
    deviceWidth, //屏幕宽度
    deviceHeight, //屏幕高度
    platform  ,//系统平台 ios or android
}