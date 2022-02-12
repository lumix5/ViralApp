import {MotiView} from 'moti';
import React from 'react';
import {Button, Text} from 'react-native';
import {human} from 'react-native-typography';

const AboutTextLast = ({onClick}) => {
    return (
        <>
            <MotiView
                from={{
                    opacity: 0,
                    scale: 0.5,

                }}
                animate={{
                    opacity: 1,
                    scale: 1,

                }}
                exit={{
                    opacity: 0,
                    scale: 0.9,
                }}>
                <Text
                    style={human.title1}
                >
                    Earn stars by like videos
                </Text>
                <Text style={human.title1}>
                    and then spend it on your promotion
                </Text>
            </MotiView>
            <Button onPress={onClick}><Text>Next</Text></Button>
        </>
    );
};

export default AboutTextLast;
