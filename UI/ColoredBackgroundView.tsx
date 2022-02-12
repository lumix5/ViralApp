import React from 'react';
import {StyleSheet, View} from 'react-native';
import {defaultColors} from '../colors/AppPallete';


type ColoredBackgroundViewType = {
    children: React.ReactNode,
    width?: string,
    color?: string,
    style?: object,
}

const defaultWidth = '80%'

const ColoredBackgroundView = ({children, width, color, style}: ColoredBackgroundViewType) => {
    return (
        <View style={[styles.shadow, styles.padding, {...style}]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    padding: {
        padding: 15,
    },
    shadow: {
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        backgroundColor: defaultColors.primary.secondary,
        marginVertical: 10,
        maxWidth: 400,
        borderColor: defaultColors.primary.secondary
    },
})

export default ColoredBackgroundView;
