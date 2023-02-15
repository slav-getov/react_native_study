import { View, Text } from 'react-native'
import React from 'react'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail fillerText={'first text'}/>
      <ImageDetail fillerText={'second text'}/>
      <ImageDetail fillerText={'third text'}/>
    </View>
  )
}

export default ImageScreen