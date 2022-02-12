import React from 'react';
import {Text, View} from 'react-native';
import {defaultColors} from '../colors/AppPallete';

type StartBuyLeftAccessoryProps = {}


const StarsBuyLeftAccessory = ({off, currency}) => {
    return (
        <View>
            <Text style={{
                backgroundColor: defaultColors.primary.accent,
                color: defaultColors.primary.textSecondary,
                paddingHorizontal: 2,
                borderBottomEndRadius: 5,
                borderBottomStartRadius: 5
            }}>{off}% OFF</Text>
            <Text>+{currency} 💎</Text>
        </View>
    )
};

export default StarsBuyLeftAccessory;
