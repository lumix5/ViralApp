import React from 'react';
import {Text, StyleSheet} from "react-native";
import {human} from "react-native-typography";
import {MotiView} from "moti";

const AwardRankTextSecondary = () => {
    return (
        <MotiView key='4' from={{opacity: 0, translateX: 0}}
                  animate={{opacity: 0.9}}
                  transition={{
                      delay: 500,
                      duration: 3000,
                  }}
                  exitTransition={{
                      type: 'timing',
                      duration: 1000,
                  }}
                  exit={{
                      opacity: 0,
                      translateX: -300,
                  }}>
            <Text style={[human.title3, styles.textNextRegular]}>
                get diamonds by rating other people's videos
            </Text>
        </MotiView>
    );
};

const styles = StyleSheet.create({
    textNextRegular: {
        marginBottom: 70,
        marginTop: 20,
        opacity: 0.9,
        textAlign: 'center',
    },
})

export default AwardRankTextSecondary;
