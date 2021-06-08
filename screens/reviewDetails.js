import React from 'react';
import {Button, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';

const ReviewDetails = ({ navigation }) => {

    // const pressHandler = () => {
    //     navigation.pop();
    //     //navigation.goBack();
    // }

    return (
        <View style={globalStyles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
            {/* <Button title="back to home" onPress={pressHandler}/> */}
        </View>
    )
}

 

export default ReviewDetails;