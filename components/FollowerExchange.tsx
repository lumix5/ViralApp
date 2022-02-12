import React from 'react';
import {Text, View} from "react-native";
import {ExchangeProps} from "../Interfaces/ExchangeProps";
import {defaultColors} from "../colors/AppPallete";

const FollowerExchange = ({followers}: ExchangeProps) => {
    return (
        <View style={{display: 'flex', flexDirection: "row", width: 65, justifyContent: 'space-between'}}>
            <Text style={{color: defaultColors.primary.text}}>+</Text>
            <Text style={{color: defaultColors.primary.text}}>{followers}</Text>
            <Text style={{height: 25, width: 25}}>❤️</Text>
        </View>
    );
};

export default FollowerExchange;
