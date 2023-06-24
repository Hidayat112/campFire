import { Dimensions, Image, StyleSheet, Text, View, } from 'react-native';
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
import CustomTextArea from 'MyApp/src/components/CustomTextArea/CustomTextArea';
import CheckBox from '@react-native-community/checkbox';
import ImagePicker from 'react-native-image-crop-picker';
const { height, width } = Dimensions.get('window');

const Photos = ({ navigation, route }) => {
    const refActionSheet = useRef(null);
    const dispatch = useDispatch();
    const [photos, setPhotos] = useState([])
    const [checkbox, setCheckbox] = useState([])
    const { Images } = useTheme()
    // const handleWishesChange = (text) => {
    //     // setWishes(text)
    // }
    const handleImagePress = (index) => (object) => {
        ImagePicker.openPicker({
            mediaType: "photo",
            cropping: true
        }).then(data => {
            setPhotos(prev => {
                const temp = [...prev];
                temp[index] = data.path
                return temp
            })
        }).catch(error => {
            console.log(error, "error occured over here");

        })
    }
    const handleCheckbox = (index) => () => {

    }
    useEffect(() => {
        dispatch(updateState({ step: route?.params?.step }));
    }, []);
    return (
        <CustomHeader
            titleText="Last step, upload 3 photos!"
            infoIcon={false}
            onBackPress={() => navigation.navigate('Gender')}
        >
            <View style={styles.container}>
                <View style={{
                    flexDirection: "row",
                    gap: 10
                }}>
                    {
                        Array(3).fill(0).map((item, index) => {
                            return <TouchableOpacity onPress={handleImagePress(index)}>
                                {
                                    photos[index] ? <Image source={{ uri: photos[index] }} style={{ height: height * 0.13, width: width * 0.18, borderRadius: 10 }} /> : <Image source={Images.icons.camera} />
                                }

                            </TouchableOpacity>
                        })
                    }
                </View>
                {
                    Array(3).fill(0).map((item, index) => {
                        return <View>
                            <CheckBox
                                disabled={false}
                                value={checkbox[index]}
                                onValueChange={handleCheckbox(index)}
                            />
                        </View>
                    })
                }
            </View>
            <CustomFooter
                // disableNextButton={!(wishes.length > 3)}
                handleOnPress={() => {
                    // dispatch(updateState({ wishes }));
                    // navigation.navigate('');
                }}
            />
        </CustomHeader>
    );
};

export default Photos;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',

    },
});
