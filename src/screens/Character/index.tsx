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

const Character = ({ navigation, route }) => {
  const refActionSheet = useRef(null);
  const { personality: defaultPersonality} = useSelector(
    state => state.profile,
  );

  const dispatch = useDispatch();
  const [character, setCharacter] = useState(defaultPersonality);

  const handleCancel = () => {
    refActionSheet.current?.hide();
  };

  useEffect(() => {
    dispatch(updateState({ step: route?.params?.step }));
  }, []);
  return (
    <CustomHeader
      titleText="Almost done! Choose a character to help others understand your personality."
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
          <Text style={{ fontSize: RFValue(19) }}>{character}</Text>
        </TouchableOpacity>

        <CustomActionSheet
          ref={refActionSheet}
          options={['Aladdin(ambitious)','Beast(strong)','General Shag(principled)','John smith(adventurous)','King arthur(strong-willed)']}
          placeholder="Select a character"
          onCancel={handleCancel}
          actionSheetStyle={{ borderRadius: 20 }}
          currentValue={character}
          onOptionSelect={personality => {
            if (!personality) return;
            setCharacter(personality);
            dispatch(updateState({ personality:character }));
            handleCancel()
          }}
        />
      </View>
      <CustomFooter
        disableNextButton={!(character.length > 0)}
        handleOnPress={() => {
        //   if (
        //     defaultGender?.toLowerCase() == 'couple' ||
        //     defaultGender?.toLowerCase() == 'family'
        //   )
        //   {
        //     dispatch(updateState({age:"not applicable"}))
        //     navigation.navigate('ProfileStatic');

        //   }
          
            navigation.navigate('Photos');
        }}
      />
    </CustomHeader>
  );
};

export default Character;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
