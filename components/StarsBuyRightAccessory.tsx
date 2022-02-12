import React from 'react';
import {Text, View} from 'react-native';


type StarsBuyRightAccessory = {}

const StarsBuyRightAccessory = ({money}) => {
    return (
        <View>
            <Text>+{money} 💲</Text>
        </View>)

};

export default StarsBuyRightAccessory;
