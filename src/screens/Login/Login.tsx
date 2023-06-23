import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Strings } from 'MyApp/src/theme/Strings'
import CustomHeader from 'MyApp/src/components/CustomHeader/CustomHeader'
import CustomTextInput from 'MyApp/src/components/CustomTextInput/CustomTextInput'
import CustomButton from 'MyApp/src/components/CustomButton/CustomButton'
import { useTheme } from 'MyApp/src/hooks'


const {height,width} = Dimensions.get("window")
export default function Login({navigation}) {
    const [error, setError] = useState(false);
    const {Images} = useTheme()
    const [errorValue, setErrorValue] = useState(Strings.errorMessage.Email);
    const [notFound, setNotFound] = useState(false);
    const [found, setFound] = useState(false);
    const [isVerified, setIsVerified] = useState(true);
    const handleBackPress = () => {
        navigation.goBack()
    }
    const handleNextPress = () => {
        navigation.navigate("Password")
    }
    return (
      <CustomHeader titleText={notFound ? Strings.NotFound :  Strings.Email} infoIcon={notFound && false} onBackPress={handleBackPress} textStyle={{fontSize:25,position:"absolute",top:50}}>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <View style={styles.inputStyle}>
           {!notFound && <CustomTextInput placeholder={Strings.PlaceHolder.Login} error={error} errorValue={errorValue} />}
                </View>
                {error && <CustomButton value='Join Waitlist' buttonStyles={styles.buttonStyles} />}
                   {notFound && 
                <View style={{position:"absolute",bottom:20,alignItems:"center"}}>
                    <View style={styles.verificationText}>
                        <Text>{Strings.VerificationLink}</Text>    
                    </View>
                        <CustomButton value='RE-SEND EMAIL' buttonStyles={styles.resendButton} />    
                    </View>}
               
            </View>
            {
                !notFound && <TouchableOpacity style={{alignSelf:"flex-end",marginBottom:30}} onPress={handleNextPress}><Image source={Images.icons.next} style={{height:50,width:50}} /></TouchableOpacity>
            }
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
        backgroundColor:"#4ABC96"
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