import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Strings } from 'MyApp/src/theme/Strings'
import CustomHeader from 'MyApp/src/components/CustomHeader/CustomHeader'
import CustomTextInput from 'MyApp/src/components/CustomTextInput/CustomTextInput'
import CustomButton from 'MyApp/src/components/CustomButton/CustomButton'
import { useTheme } from 'MyApp/src/hooks'
import CustomFooter from 'MyApp/src/components/CustomFooter'
import { useDispatch } from 'react-redux'
import { updateState } from 'MyApp/src/store/profile'


const {height,width} = Dimensions.get("window")
export default function Login({ navigation }) {
    const dispatch = useDispatch()
    const [error, setError] = useState(false);
    const {Images} = useTheme()
    const [errorValue, setErrorValue] = useState(Strings.errorMessage.Email);
    const [email, setEmail] = useState("");
    const [notFound, setNotFound] = useState(false);
    const [found, setFound] = useState(false);
    const [isVerified, setIsVerified] = useState(true);
    const handleBackPress = () => {
        navigation.goBack()
    }
    const handleNextPress = () => {
        navigation.navigate("Home")
    }
    const handleEmailChange = (val) => {
        setEmail(val);
    }
    return (
      <CustomHeader titleText={notFound ? Strings.NotFound :  Strings.Email} infoIcon={notFound && false} onBackPress={handleBackPress} textStyle={{fontSize:25,position:"absolute",top:50}}>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <View style={styles.inputStyle}>
                    {!notFound && <CustomTextInput value={email} placeholder={Strings.PlaceHolder.Login} error={error} errorValue={errorValue} onChangeText={handleEmailChange} />}
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
                !notFound &&  <CustomFooter
                disableNextButton={!(email.length > 3)}
                handleOnPress={() => {
                    dispatch(updateState({ email }));
                    handleNextPress();
                }}
              />
            }
        </CustomHeader>
  )
}

const styles = StyleSheet.create({
    inputStyle: {
        // width: width * 0.5,
        color:"black"
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