import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const name = "Piyabute"
const ComponentsScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle} >Getting started with react native!</Text>
            <Text style={styles.name}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    name: {
        fontSize: 20
    }
})


export default ComponentsScreen