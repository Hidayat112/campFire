import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'MyApp/src/hooks';

const CustomFooter = ({
  handleOnPress = () => {},
  disableNextButton = false,
}) => {
  const { Images } = useTheme();

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 20,
        right: 10,
        alignItems: 'center',
      }}
    >
      <TouchableOpacity onPress={handleOnPress}>
        <Image
          source={Images.icons.next}
          style={{
            height: 50,
            width: 50,
            opacity: disableNextButton ? 0.3 : 1,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomFooter;

const styles = StyleSheet.create({});
