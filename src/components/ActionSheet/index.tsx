import React, { forwardRef, useImperativeHandle } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

const CustomActionSheet = forwardRef(
  (
    {
      options,
      placeholder,
      onOptionSelect,
      onCancel,
      buttonStyle,
      actionSheetStyle,
      optionStyle,
      cancelOptionStyle,
      currentValue,
    },
    ref,
  ) => {
    return (
      <ScrollView>
        <ActionSheet
          ref={ref}
          containerStyle={[styles.actionSheet, actionSheetStyle]}
        >
          {options.map(option => (
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: currentValue == option ? '#e6ffe6' : 'white',
              }}
              key={option}
              onPress={() => onOptionSelect(option)}
            >
              <Text style={[styles.option, optionStyle]}>{option}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={onCancel} style={{ alignItems: 'center' }}>
            <Text style={[styles.cancelOption, cancelOptionStyle]}>Cancel</Text>
          </TouchableOpacity>
        </ActionSheet>
      </ScrollView>
    );
  },
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    fontSize: 18,
    color: '#007AFF', // iOS default blue color
  },
  actionSheet: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    color: "black",
  },
  cancelOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#FF3B30', // iOS default red color for destructive options
  },
});

export default CustomActionSheet;
