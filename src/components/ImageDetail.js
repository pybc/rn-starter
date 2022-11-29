import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ImageDetail = ({title, imageSource,score}) => {
  console.log("title",title)
  console.log("imageSource",imageSource)
  return (
    <View>
      <Image source={imageSource}/>
      <Text>{title} </Text>
      <Text>Image - score {score}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default ImageDetail;
