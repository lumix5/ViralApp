import React from 'react';
import {StyleSheet, Text} from "react-native";
import {human} from "react-native-typography";
import {MotiView} from "moti";

const AwardRankTextPrimary = () => {
    return (
        <MotiView key='3' from={{opacity: 0, translateX: 0, translateY: 250}}
                  animate={{opacity: 1, translateX: 0, translateY: 0}}
                  transition={{
                      delay: 250,
                      duration: 3000,
                  }}
                  exitTransition={{
                      type: 'timing',
                      duration: 1000,
                  }} exit={{
            opacity: 0,
            translateX: -300,
        }}>
            <Text
                style={[human.title1, styles.textCenter]}>
                Earn diamonds
            </Text>
        </MotiView>
    );
};
const styles = StyleSheet.create({
    textCenter: {
        textAlign: 'center',
    },
})

export default AwardRankTextPrimary;
