import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import ImageDetail from "../components/ImageDetail.js";

const ImageScreen = () => {
  return (
    <View>
        <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score="9"/>
        <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score="9"/>
        <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score="10"/>
        <ImageDetail title="Moon" imageSource={require('../../assets/forest.jpg')} score="10"/>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;
