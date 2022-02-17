import React from 'react';
import {Icon} from "react-native-elements";
import {MotiView} from "moti";

const RankUpIcon = () => {
    return (
        <MotiView from={{opacity: 1}}
                  exit={{
                      opacity: 0
                  }}
                  exitTransition={{
                      type: 'timing',
                      duration: 500,
                  }}
                  transition={{
                      type: 'timing',
                      duration: 0,
                  }}
                  key='12'>
            <Icon
                size={300}
                name='bar-chart'
                type='feather'
                color='white'
            />
        </MotiView>
    );
};

export default RankUpIcon;
