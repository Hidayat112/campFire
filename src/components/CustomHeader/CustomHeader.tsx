import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Images } from 'MyApp/src/theme'
import { useTheme } from 'MyApp/src/hooks'
import { Colors } from 'MyApp/src/theme/Variables'


export default function CustomHeader({titleText,backIcon= true,children,infoIcon = true,onBackPress=()=>{},textStyle }) {
    const {Images} = useTheme()
    return (
        <View style={styles.root}>
            <View>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              {backIcon && <TouchableOpacity onPress={onBackPress}><Image source={Images.icons.back} style={{height:20,width:20}} /></TouchableOpacity>}
               {infoIcon && <Image source={Images.icons.info} style={{height:20,width:20}} />}
                </View>
                <Text style={[styles.text,textStyle]}>{titleText}</Text>
                </View>
            {children}
            </View>
  )
}

const styles = StyleSheet.create({
    root: {
        flex:1,paddingHorizontal: 10,paddingTop:10,backgroundColor:Colors.white
    },
    text: {
        fontSize: 20,
        marginTop: 30,
        paddingHorizontal: 20,
        fontFamily:"Avenir Heavy",
        color:"black",
        fontWeight:"800"
    }
})