import React from 'react';
import {Text, View} from "react-native";
import {ExchangeProps} from "../Interfaces/ExchangeProps";
import {defaultColors} from "../colors/AppPallete";


const CurrencyExchange = ({currency}: ExchangeProps) => {
    return (
        <View style={{display: 'flex', flexDirection: "row", width: 65, justifyContent: 'space-between'}}>
            <Text style={{color: defaultColors.primary.text}}>-</Text>
            <Text style={{color: defaultColors.primary.text}}>{currency} 💎</Text>
        </View>
    );
};

export default CurrencyExchange;
