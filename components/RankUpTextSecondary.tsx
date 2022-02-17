import React from 'react';
import {MotiView} from "moti";
import {human} from "react-native-typography";

const RankUpTextSecondary = () => {
    return (
        <MotiView key='1'
                  from={{opacity: 0, translateX: 0}}
                  animate={{opacity: 0.9}}
                  exitTransition={{
                      type: 'timing',
                      duration: 1000,
                  }}
                  exit={{
                      opacity: 0,
                      translateX: -300,
                  }}
                  transition={{
                      delay: 250,
                      duration: 3000,
                  }}>
            <Text style={[human.title3, styles.nextStepText]}>
                post your videos or profile and get likes and followers
            </Text>
        </MotiView>
    );
};

export default RankUpTextSecondary;
