import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomHeader from 'MyApp/src/components/CustomHeader/CustomHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomFooter from 'MyApp/src/components/CustomFooter';
import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../../store/profile/index';
import { screenStepMapLabel } from '../../utils';

const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const {
    step: mostPriorStep,
    age,
    gender,
  } = useSelector(state => state.profile);
  // useLayoutEffect(() => {
  //   if (mostPriorStep > 1) {
  //     if (
  //       mostPriorStep > 4 &&
  //       age == 'not applicable' &&
  //       !(gender?.toLowerCase() == 'couple' || gender?.toLowerCase() == 'family')
  //     )
  //     {
  //       navigation.navigate(screenStepMapLabel[4]);
  //     }
  //       navigation.navigate(screenStepMapLabel[mostPriorStep - 1]);
  //   }
  // }, []);
  // useEffect(() => {
  //   dispatch(updateState({ step: route?.params?.step }));
  // }, []);
  return (
    <CustomHeader titleText="" backIcon={false} infoIcon={false}>
      <View style={styles.container}>
        <TouchableOpacity
          // style={styles.emailButton}
          activeOpacity={0.5}
          // onPress={() => navigation.navigate('Login')}
        >
          <Image
            style={styles.icon}
            source={require('../../theme/assets/images/Crab.jpeg')}
            resizeMode={'cover'}
          />
        </TouchableOpacity>
        <Text style={styles.description}>
          Hello I'm Kpop.I'd like to get to know you to connect you to travelers
        </Text>
      </View>
      <CustomFooter
        handleOnPress={() => {
          navigation.navigate('Name');
        }}
      />
    </CustomHeader>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  description: {
    marginTop: RFValue(30),
    fontSize: RFValue(27),
    lineHeight: RFValue(34),
    fontFamily: 'Avenir-Heavy',
    letterSpacing: 0,
    fontWeight: '800',
    padding: RFValue(6),
  },
  icon: {
    marginTop: RFValue(150),
    height: RFValue(80),
    width: RFValue(80),
  },
});
