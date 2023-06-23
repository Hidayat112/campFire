import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomHeader from 'MyApp/src/components/CustomHeader/CustomHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'MyApp/src/hooks';
import CustomFooter from 'MyApp/src/components/CustomFooter';
import { Strings } from 'MyApp/src/theme/Strings';

import ActionSheet from 'react-native-actionsheet';
import CustomTextInput from 'MyApp/src/components/CustomTextInput/CustomTextInput';
const { height, width } = Dimensions.get('window');

const Country = ({ navigation }) => {
  const refActionSheet = useRef(null);
  return (
    <CustomHeader titleText="What best describes you?" infoIcon={false}>
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
          title={'Which one of the following country you reside in ?'}
          options={['India', 'USA', 'UK', 'Canada']}
          onPress={index => {
            /* do something */
          }}
        />
      </View>
      <CustomFooter
        handleOnPress={() => {
          navigation.navigate('Name');
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
