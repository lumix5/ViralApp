import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {ExchangeProps} from "../Interfaces/ExchangeProps";
import {defaultColors} from "../colors/AppPallete";

const FollowerExchange = ({followers}: ExchangeProps) => {
    return (
        <View style={styles.exchangeContainer}>
            <Text style={styles.exchangeTextColor}>+</Text>
            <Text style={styles.exchangeTextColor}>{followers}</Text>
            <Text style={styles.heartSize}>❤️</Text>
        </View>
    );
};

export default FollowerExchange;

const styles = StyleSheet.create({
    exchangeTextColor: {
        color: defaultColors.primary.text,
    },
    heartSize: {
        height: 25,
        width: 25,
    },
    exchangeContainer: {
        display: 'flex',
        flexDirection: "row",
        width: 65,
        justifyContent: 'space-between',
    },
})
