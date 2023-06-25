import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Brand } from '../../components';
import { useTheme } from '../../hooks';
import { changeTheme, ThemeState } from '../../store/theme';
import { Colors } from 'MyApp/src/theme/Variables';
import { Strings } from 'MyApp/src/theme/Strings';
const {height,width} = Dimensions.get("window")
const Example = ({navigation}) => {

  return (
    <View style={{ flex: 1,backgroundColor:"#ffffff"}}>
      <View style={{ flex: 2 ,justifyContent:"center"}}>
        <View style={{alignSelf:"center",alignItems:"center",height:height*0.5,paddingHorizontal:20}}>
        <Text style={styles.title}>{Strings.CampFire}</Text>
          <Text style={styles.campFireSubContainer}>{Strings.CampfireText}</Text>
          </View>
      </View>
      <View style={{flex:1}}>
      <View style={styles.rotationalContainer} />
        <View style={styles.subContainer}>
        <TouchableOpacity style={styles.emailButton} activeOpacity={0.5} onPress={()=>navigation.navigate("LoginNavigator")}>
            <Image source={require("../../theme/assets/images/email.png")} resizeMode={"cover"}/>
          </TouchableOpacity>
          <View>
            <Text style={styles.text}>
            {Strings.TermsAndCondition}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Example;


const styles = StyleSheet.create({
  subContainer: {
    flex:1,
    backgroundColor: "#1A383E",
    justifyContent: "center",
    alignItems:"center"
  },
  campFireSubContainer: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Avenir Heavy",
    color:"black"
  },
  title: {
    fontSize: 50,
    marginBottom: width * 0.15,
    fontFamily:"Avenir Heavy",
    color:"black"
  },
  emailButton: {
    borderRadius: 25,
    alignItems:"center",
    borderWidth: 2,
    padding: 10,
    width:width*0.8,
    backgroundColor: Colors.white,
    marginBottom:5
  },
  text: {
    maxWidth: width * 0.8,
    textAlign:"center",
    color: Colors.white,
    fontFamily:"Avenir Heavy"
  },
  rotationalContainer:{
    backgroundColor: "#1A383E", height: height*0.1, width:width*1.4, transform: [
      { translateX: -10 },
      {translateY:25},
      { rotateZ: '-7deg'},
  ],}
})
