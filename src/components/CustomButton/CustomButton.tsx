import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from 'MyApp/src/theme/Variables'
const {height,width} = Dimensions.get("window")
export default function CustomButton({value="",buttonStyles={}}) {
  return (
      <TouchableOpacity style={[styles.button,buttonStyles]}>
          <Text style={{color:"white"}}>{value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        height: height * 0.1,
        backgroundColor:Colors.white,
        justifyContent: "center",
        alignItems:"center"
    }
})