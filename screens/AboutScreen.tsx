import {AnimatePresence, MotiView} from 'moti'
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from '@ui-kitten/components'
import {defaultColors} from '../colors/AppPallete';
import ColoredBackgroundView from '../UI/ColoredBackgroundView';
import * as Progress from "react-native-progress";
import {storeData} from '../localStorage/storeData';
import RankUpIcon from "../components/RankUpIcon";
import AwardIcon from "../components/AwardIcon";
import RankUpTextPrimary from "../components/RankUpTextPrimary";
import AwardRankTextPrimary from "../components/AwardRankTextPrimary";
import RankUpTextSecondary from "../components/RankUpTextSecondary";
import AwardRankTextSecondary from "../components/AwardRankTextSecondary";

const AboutScreen = ({navigation}) => {
    const [isProgressed, setIsProgressed] = useState<boolean>(true);
    const [progressBar, setProgressBar] = useState<number>(0);

    useEffect(() => {
        storeData('isAuth', {isAuth: true})
    })

    function clickHandle() {
        setIsProgressed(false)
        setProgressBar(0.5)
    }

    function goToCore() {
        setProgressBar(1)
        setTimeout(() => {
            navigation.navigate('App')
        }, 500)
    }

    return (
        <>
            <View style={styles.marginTopCenter}>
                <ColoredBackgroundView color={defaultColors.primary.secondary}>
                    <AnimatePresence exitBeforeEnter>
                        {isProgressed ? <RankUpIcon/> : <AwardIcon/>}
                    </AnimatePresence>
                </ColoredBackgroundView>
            </View>
            <View style={styles.nextStepContainer}>
                <AnimatePresence exitBeforeEnter>
                    {isProgressed ? <RankUpTextPrimary/> : <AwardRankTextPrimary />}
                </AnimatePresence>
                <AnimatePresence exitBeforeEnter>
                    {isProgressed ? <RankUpTextSecondary /> : <AwardRankTextSecondary/>}
                </AnimatePresence>
            </View>
            <Button onPress={isProgressed ? clickHandle : goToCore} style={styles.progressButton}>
                <Text>{isProgressed ? 'Next' : 'Get Started'}</Text>
            </Button>
            <Progress.Bar
                progress={progressBar}
                width={200}
                color={defaultColors.primary.secondary}
                style={styles.marginTopCentered}
            />
        </>
    );
}

const styles = StyleSheet.create({
    marginTopCentered: {
        marginTop: "10%",
        alignSelf: "center",
    },
    progressButton: {
        width: '55%',
        backgroundColor: defaultColors.primary.secondary,
        borderColor: defaultColors.primary.secondary,
        alignSelf: 'center',
    },
    nextStepText: {
        marginBottom: 70,
        marginTop: 20,
        opacity: 0.9,
        textAlign: 'center',
    },
    nextStepContainer: {
        width: 300,
        alignSelf: 'center',
        marginTop: 45,
    },
  
    marginTopCenter: {
        alignSelf: 'center',
        marginTop: 50,
    },
})

export default AboutScreen;

