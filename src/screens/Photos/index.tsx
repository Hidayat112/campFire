import { Dimensions, Image, StyleSheet, Text, View, } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomHeader from 'MyApp/src/components/CustomHeader/CustomHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'MyApp/src/hooks';
import CustomFooter from 'MyApp/src/components/CustomFooter';
import { Strings } from 'MyApp/src/theme/Strings';
import { useDispatch, useSelector } from 'react-redux';
import { updateState } from '../../store/profile';
import CheckBox from '@react-native-community/checkbox';
import ImagePicker from 'react-native-image-crop-picker';
import { useSignUpMutation } from 'MyApp/src/services/modules/auth';
import Toast from 'react-native-toast-message';
import { checkPhotosArr, getPhotosBlob } from 'MyApp/src/utils';
const { height, width } = Dimensions.get('window');

const Photos = ({ navigation, route }) => {
    const refActionSheet = useRef(null);
    const dispatch = useDispatch();
    const [photos, setPhotos] = useState([])
    const [checkbox, setCheckbox] = useState([])
    const { Images } = useTheme()
    const [signUp, { data, error, isLoading }] = useSignUpMutation();
    const profileData = useSelector(state => state.profile)
    // const handleWishesChange = (text) => {
    //     // setWishes(text)
    // }
    console.log(profileData,"data at here");
    
    // {"adv": "Fabsvahsgsjdgsjddjdvdmdgdkzhddkmgxbvmcbdbsbsxn dhdjdjd nn dbdndbdndjfkfjdjdjdkdkdjjsksksskskskksskksdkkssksk", "age": 30, "country": "India", "gender": "Non-Binary", "name": "Klll", "nextAdv": "", "personality": "Beast(strong)", "photos": [], "step": 9, "wishes": "Jjjjjj"}


    const handleImagePress = (index) => () => {
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
        setCheckbox(prev => {
            const temp = [...prev]
            temp[index] = !prev[index];
            return temp;
        })
    }
    const handleNextPress = async () => {
        try {
            const {name,adv,nextAdv,age,country,gender,personality,wishes,email} = profileData
            const payload = {
                email,
                firstName:name,
                Gender:gender,
                country,
                Age:age,
                Adventure:adv,
                nextAdventure:nextAdv,
                Wish:wishes,
                Character:personality,
                Photos : getPhotosBlob(photos)
            }
            const data = await signUp(payload);
            console.log(data, "got the data");
            Toast.show({type:"success",text1:"Got the Data"})
            
        } catch (error) {
            console.log(error, "api error");     
            Toast.show({type:"error",text1:"Something went wrong!"})
        }
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
                <View style={styles.checkBox}>
                    {
                        Array(3).fill(0).map((item, index) => {
                            return <View style={styles.checkBoxContainer}>
                                <CheckBox
                                    disabled={false}
                                    value={checkbox[index]}
                                    onValueChange={handleCheckbox(index)}
                                    tintColors={{
                                        true: "black",
                                        false: "black"
                                    }}
                                />
                                <View>
                                    <Text style={styles.checkBoxText}>{Strings.Photos[index]}</Text>
                                </View>
                            </View>
                        })
                    }
                </View>
            </View>
            <CustomFooter
                // disableNextButton={!(wishes.length > 3)}
                handleOnPress={() => {
                    // dispatch(updateState({ wishes }));
                    // navigation.navigate('');                    
                    if (checkPhotosArr(photos)) {
                        handleNextPress();                        
                    } else {
                        Toast.show({
                            type: "error",
                            text1:"Please upload all 3 photos"
                        })
                    }

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
    checkBox: { alignSelf: "flex-start", paddingHorizontal: RFValue(35),marginTop:RFValue(30)},
    checkBoxText: {
        color: "black",
        fontFamily:"Avenir Regular"
    },
    checkBoxContainer: {
        flexDirection: "row",
        alignItems:"center"
    }
});
