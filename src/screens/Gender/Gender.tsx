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

const Gender = ({ navigation, route }) => {
  const refActionSheet = useRef(null);
  const defaultGender = useSelector(state => state.profile.gender);
  const dispatch = useDispatch();
  const [gender, setGender] = useState(defaultGender);

  const handleCancel = () => {
    refActionSheet.current?.hide();
  };

  useEffect(() => {
    dispatch(updateState({ step: route?.params?.step }));
  }, []);
  return (
    <CustomHeader
      titleText="What best describes you?"
      infoIcon={false}
      onBackPress={() => navigation.navigate('Name')}
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
          <Text style={{ fontSize: RFValue(19) }}>{gender}</Text>
        </TouchableOpacity>

        <CustomActionSheet
          ref={refActionSheet}
          options={['Man', 'Woman', 'Non-Binary', 'Couple', 'Family']}
          placeholder="Select Gender"
          onCancel={handleCancel}
          actionSheetStyle={{ borderRadius: 20 }}
          currentValue={gender}
          onOptionSelect={gender => {
            if (!gender) return;
            setGender(gender);
            dispatch(updateState({ gender }));
          }}
        />
      </View>
      <CustomFooter
        disableNextButton={!(gender.length > 0)}
        handleOnPress={() => {
          navigation.navigate('Country');
        }}
      />
    </CustomHeader>
  );
};

export default Gender;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
