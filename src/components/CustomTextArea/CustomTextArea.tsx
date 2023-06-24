import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function CustomTextArea({textAreaStyle={}, ...props }) {
    return (
        <View>
            <TextInput
                style={[styles.textArea,textAreaStyle]}
                placeholderTextColor={"#7A7A7A"}
                textAlignVertical={"top"}
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textArea: {
        borderWidth: 2,
        borderRadius: 10,
        color:"black",
        backgroundColor: "#FFFDF4"
    }
})