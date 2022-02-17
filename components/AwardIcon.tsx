import React from 'react';
import {Icon} from "react-native-elements";
import {MotiView} from "moti";

const AwardIcon = () => {
    return (
        <MotiView from={{opacity: 0}} animate={{opacity: 1}} transition={{
            type: 'timing',
            duration: 1000,
        }}
                  exitTransition={{type: 'timing'}}
                  key='13'>
            <Icon
                size={300}
                name='award'
                type='feather'
                color='white'
            />
        </MotiView>
    );
};

export default AwardIcon;
