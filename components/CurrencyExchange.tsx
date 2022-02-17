import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {ExchangeProps} from "../Interfaces/ExchangeProps";
import {defaultColors} from "../colors/AppPallete";


const CurrencyExchange = ({currency}: ExchangeProps) => {
    return (
        <View style={styles.exchangeContainer}>
            <Text style={styles.exchangeTextColor}>-</Text>
            <Text style={styles.exchangeTextColor}>{currency} 💎</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    exchangeTextColor: {
        color: defaultColors.primary.text,
    },
    exchangeContainer: {
        display: 'flex',
        flexDirection: "row",
        width: 65,
        justifyContent: 'space-between',
    },
})


export default CurrencyExchange;

