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
import { getAgeRange } from '../../utils';
const { height, width } = Dimensions.get('window');

const Age = ({ navigation, route }) => {
  const refActionSheet = useRef(null);
  const defaultAge = useSelector(state => state.profile.age);
  const dispatch = useDispatch();
  const [age, setAge] = useState(defaultAge);

  const handleCancel = () => {
    refActionSheet.current?.hide();
  };

  useEffect(() => {
    dispatch(updateState({ step: route?.params?.step }));
  }, []);
  return (
    <CustomHeader
      titleText="What's your age?"
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
          <Text style={{ fontSize: RFValue(19) }}>{age}</Text>
        </TouchableOpacity>

        <CustomActionSheet
          ref={refActionSheet}
          options={getAgeRange(18,418)}
          placeholder="Select Country"
          onCancel={handleCancel}
          actionSheetStyle={{ borderRadius: 20 }}
          currentValue={age}
          onOptionSelect={age => {
            if (!age) return;
            setAge(age);
            dispatch(updateState({ age }));
          }}
        />
      </View>
      <CustomFooter
        disableNextButton={!(age.length > 0)}
        handleOnPress={() => {
          navigation.navigate('ProfileStatic');
        }}
      />
    </CustomHeader>
  );
};

export default Age;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
