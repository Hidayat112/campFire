import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Strings } from 'MyApp/src/theme/Strings'
import CustomHeader from 'MyApp/src/components/CustomHeader/CustomHeader'
import CustomTextInput from 'MyApp/src/components/CustomTextInput/CustomTextInput'
import CustomButton from 'MyApp/src/components/CustomButton/CustomButton'
import { useTheme } from 'MyApp/src/hooks'
import { NavigationColors } from 'MyApp/src/theme/Variables'


const {height,width} = Dimensions.get("window")
export default function ForgotPassword({navigation}) {
    const [error, setError] = useState(false);
    const {Images} = useTheme()
    const [errorValue, setErrorValue] = useState(Strings.errorMessage.Email);
    const [notFound, setNotFound] = useState(true);
    const [found, setFound] = useState(false);
    const [isVerified, setIsVerified] = useState(true);
    const handleBackPress = () => {
        navigation.goBack();
    }
    return (
      <CustomHeader titleText={Strings.ForgotPassword} infoIcon={notFound && false} onBackPress={handleBackPress}>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <View style={styles.inputStyle}>
                    <CustomTextInput placeholder={Strings.PlaceHolder.Password} error={error} errorValue={errorValue} />
        </View>    
          </View>
        </CustomHeader>
  )
}

const styles = StyleSheet.create({
    inputStyle: {
        width: width * 0.5,
    },
    resendButton: {
        width: width * 0.9,
        borderRadius: 10,        
    },
    verificationText: {
        marginBottom:10
    },
    buttonStyles: {
        width: width * 0.9,
        borderRadius: 10,
        position: "absolute",
        bottom: height*0.05
    }
})