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
import { getAgeRange } from '../../utils';
import CustomTextArea from 'MyApp/src/components/CustomTextArea/CustomTextArea';
const { height, width } = Dimensions.get('window');

const Wishes = ({ navigation, route }) => {
    const refActionSheet = useRef(null);
    const defaultWishes = useSelector(state => state.profile.wishes);
    const dispatch = useDispatch();
    const [wishes,setWishes] = useState(defaultWishes)

    const handleWishesChange = (text) => {
        setWishes(text)
    }
    useEffect(() => {
        dispatch(updateState({ step: route?.params?.step }));
    }, []);
    return (
        <CustomHeader
            titleText="What are your top wishes?"
            infoIcon={false}
            onBackPress={() => navigation.navigate('Gender')}
        >
            <View style={styles.container}>
                <CustomTextArea
                    placeholder={Strings.PlaceHolder.Wishes}
                    value={wishes}
                    onChangeText={handleWishesChange}
                    multiline={true}
                    textAreaStyle={{height:height*0.3,width:width*0.7}}
                />
            </View>
            <CustomFooter
                disableNextButton={!(wishes.length > 3)}
                handleOnPress={() => {
                    dispatch(updateState({ wishes }));
                    navigation.navigate('NextAdventures');
                }}
            />
        </CustomHeader>
    );
};

export default Wishes;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});
