import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomHeader from 'MyApp/src/components/CustomHeader/CustomHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'MyApp/src/hooks';
import CustomFooter from 'MyApp/src/components/CustomFooter';
import { Strings } from 'MyApp/src/theme/Strings';

import ActionSheet from "react-native-actionsheet";
import CustomTextInput from 'MyApp/src/components/CustomTextInput/CustomTextInput';
const { height, width } = Dimensions.get('window');

const Gender = ({ navigation }) => {
  const refActionSheet = useRef(null);
  return (
    <CustomHeader titleText="What best describes you?" infoIcon={false} onBackPress={()=>navigation.goBack()}>
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
        ></TouchableOpacity>

        <ActionSheet
          ref={refActionSheet}
          title={'Which one of the following describes you ?'}
          options={['Man', 'Woman', 'Couple', 'Family']}
          onPress={index => {
            /* do something */
            // refActionSheet.current.close()
          }}
        />
      </View>
      <CustomFooter
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
