import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'

const index = () => {
  return (
    <View>
      <Image source={imagePath.react_logo}/>
    </View>
  )
}

export default index