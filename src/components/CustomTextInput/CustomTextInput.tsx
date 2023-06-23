import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors } from 'MyApp/src/theme/Variables'
const {width,height} = Dimensions.get("window")
export default function CustomTextInput({error,errorValue,...props}) {
    return (
        <View>
        <TextInput
            underlineColorAndroid={"transparent"}
            style={{ borderBottomColor: Colors.textGray800, borderBottomWidth: 1.5,textAlign:"center",color:"black"}}
            {...props}
            />
            {
                error && <Text style={styles.errorStyle}>{errorValue}</Text>
            }
            </View>
  )
}

const styles = StyleSheet.create({
    errorStyle: {
        color:"red"
    }
})