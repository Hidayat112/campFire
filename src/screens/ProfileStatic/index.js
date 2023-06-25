import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomHeader from 'MyApp/src/components/CustomHeader/CustomHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomFooter from 'MyApp/src/components/CustomFooter';
import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../../store/profile/index';
import { screenStepMapLabel } from '../../utils';

const ProfileStatic = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const gender = useSelector(state => state.profile.gender);

  useEffect(() => {
    dispatch(updateState({ step: route?.params?.step }));
  }, []);
  return (
    <CustomHeader
      titleText=""
      backIcon={true}
      infoIcon={false}
      onBackPress={() =>
        navigation.navigate(
          gender.toLowerCase() == 'family' || gender.toLowerCase() == 'couple'
            ? 'Country'
            : 'Age',
        )
      }
    >
      <View style={styles.container}>
        <Text style={styles.description}>
          Perfect, let's create a profile that shows how amazing you are.
        </Text>
      </View>
      <CustomFooter
        handleOnPress={() => {
          navigation.navigate('Adventures');
        }}
      />
    </CustomHeader>
  );
};

export default ProfileStatic;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  description: {
    marginTop: RFValue(30),
    fontSize: RFValue(26),
    lineHeight: RFValue(34),
    fontFamily: 'Avenir Heavy',
    color:"black",
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
