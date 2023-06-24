import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomHeader from 'MyApp/src/components/CustomHeader/CustomHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'MyApp/src/hooks';
import CustomFooter from 'MyApp/src/components/CustomFooter';
import { Strings } from 'MyApp/src/theme/Strings';

import ActionSheet from 'react-native-actions-sheet';
import CustomTextInput from 'MyApp/src/components/CustomTextInput/CustomTextInput';
import { useDispatch, useSelector } from 'react-redux';
import CustomActionSheet from '../../components/ActionSheet';
import { updateState } from '../../store/profile';
const { height, width } = Dimensions.get('window');

const Country = ({ navigation, route }) => {
  const refActionSheet = useRef(null);
  const { country: defaultCountry, gender: defaultGender } = useSelector(
    state => state.profile,
  );

  const dispatch = useDispatch();
  const [country, setCountry] = useState(defaultCountry);

  const handleCancel = () => {
    refActionSheet.current?.hide();
  };

  useEffect(() => {
    dispatch(updateState({ step: route?.params?.step }));
  }, []);
  return (
    <CustomHeader
      titleText="What country are you in?"
      infoIcon={false}
      onBackPress={() => navigation.navigate('Gender')}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            height: RFValue(30),
            width: RFValue(120),
            borderBottomColor: 'black',
            borderBottomWidth: 2,
          }}
          onPress={() => {
            refActionSheet.current.show();
          }}
        >
          <Text style={{ fontSize: RFValue(19) }}>{country}</Text>
        </TouchableOpacity>

        <CustomActionSheet
          ref={refActionSheet}
          options={['India', 'UK', 'Canada', 'USA', 'Australia']}
          placeholder="Select Country"
          onCancel={handleCancel}
          actionSheetStyle={{ borderRadius: 20 }}
          currentValue={country}
          onOptionSelect={country => {
            if (!country) return;
            setCountry(country);
            dispatch(updateState({ country }));
            handleCancel()
          }}
        />
      </View>
      <CustomFooter
        disableNextButton={!(country.length > 0)}
        handleOnPress={() => {
          if (
            defaultGender?.toLowerCase() == 'couple' ||
            defaultGender?.toLowerCase() == 'family'
          )
          {
            dispatch(updateState({age:"not applicable"}))
            navigation.navigate('ProfileStatic');

          }
          
            navigation.navigate('Age');
        }}
      />
    </CustomHeader>
  );
};

export default Country;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
