import React from 'react';
import {Text} from "react-native";
import {human} from "react-native-typography";
import {MotiView} from "moti";

const RankUpTextPrimary = () => {
    return (
        <MotiView key='2' from={{opacity: 0, translateX: 0, translateY: 250}}
                  animate={{opacity: 1, translateX: 0, translateY: 0}}
                  transition={{
                      delay: 250,
                      duration: 3000,
                  }}
                  exitTransition={{
                      type: 'timing',
                      duration: 1000,
                  }}
                  exit={{
                      opacity: 0,
                      translateX: -300,
                  }}
        >
            <Text
                style={[human.title1, styles.textCenter]}>
                Promote yourself
            </Text>
        </MotiView>
    );
};

export default RankUpTextPrimary;
