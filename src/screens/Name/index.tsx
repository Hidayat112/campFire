import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomHeader from 'MyApp/src/components/CustomHeader/CustomHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'MyApp/src/hooks';
import CustomFooter from 'MyApp/src/components/CustomFooter';
import { Strings } from 'MyApp/src/theme/Strings'

import CustomTextInput from 'MyApp/src/components/CustomTextInput/CustomTextInput';
const { height, width } = Dimensions.get('window');

const Name = ({ navigation }) => {
  return (
    <CustomHeader titleText="What's your first name?" infoIcon={false}>
      <View style={styles.container}>
        <CustomTextInput
          placeholder={Strings.PlaceHolder.Login}
          required={true}
        />
      </View>
      <CustomFooter
        handleOnPress={() => {
          navigation.navigate('Gender');
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
    justifyContent:"center"
  },

});
