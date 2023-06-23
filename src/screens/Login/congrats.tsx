import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from 'MyApp/src/components/CustomHeader/CustomHeader'
import { Strings } from 'MyApp/src/theme/Strings'

export default function Congrats() {
    const handleBackPress = () => {
        
    }
  return (
      <CustomHeader titleText={Strings.Welcome} infoIcon={false} onBackPress={handleBackPress}>
          
    </CustomHeader>
  )
}

const styles = StyleSheet.create({})