import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    return (
      <View>
        <ColorCounter
          onIncrease={() => setRed(red + 1)}
          onDecrease={() => setRed(red - 1)}
          color="Red"
        />
        <ColorCounter
          onIncrease={() => setBlue(red + 1)}
          onDecrease={() => setBlue(red - 1)}
          color="Blue"
        />
        <ColorCounter
          onIncrease={() => setGreen(red + 1)}
          onDecrease={() => setGreen(red - 1)}
          color="Green"
        />
      </View>
    );
}

const  styles = StyleSheet.create({})

export default SquareScreen