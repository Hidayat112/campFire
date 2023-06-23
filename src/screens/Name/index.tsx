import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomHeader from 'MyApp/src/components/CustomHeader/CustomHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'MyApp/src/hooks';
import CustomFooter from 'MyApp/src/components/CustomFooter';
import { Strings } from 'MyApp/src/theme/Strings';

import CustomTextInput from 'MyApp/src/components/CustomTextInput/CustomTextInput';
import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../../store/profile/index';

const { height, width } = Dimensions.get('window');

const Name = ({ navigation, route }) => {
  const defaultName = useSelector(state => state.profile.name);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(defaultName);
  const handleTextChange = newText => {
    // Remove any characters that are not alphabets
    const filteredText = newText.replace(/[^a-zA-Z]/g, '');
    setFirstName(filteredText);
  };
  useEffect(() => {
    dispatch(updateState({ step: route?.params?.step }));
  }, []);
  return (
    <CustomHeader
      titleText="What's your first name?"
      infoIcon={false}
      onBackPress={() => navigation.navigate('Dashboard')}
    >
      <View style={styles.container}>
        <CustomTextInput
          placeholder={Strings.PlaceHolder.Name}
          required={true}
          value={firstName}
          onChangeText={handleTextChange}
          keyboardType="ascii-capable"
          overrideStyles={{ fontSize: RFValue(18) }}
        />
      </View>
      <CustomFooter
        disableNextButton={!(firstName.length > 0)}
        handleOnPress={() => {
          dispatch(updateState({ name: firstName }));
          firstName.length > 0 && navigation.navigate('Gender');
        }}
      />
    </CustomHeader>
  );
};

export default Name;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
