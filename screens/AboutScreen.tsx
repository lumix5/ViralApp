import {AnimatePresence, MotiView} from 'moti'
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements'
import {Button} from '@ui-kitten/components'
import {human} from 'react-native-typography';
import {defaultColors} from '../colors/AppPallete';
import ColoredBackgroundView from '../UI/ColoredBackgroundView';
import * as Progress from "react-native-progress";

const AboutScreen = ({navigation}) => {
    const [isProgressed, setIsProgressed] = useState<boolean>(true);
    const [progressBar, setProgressBar] = useState<number>(0);
    const [isNotProggresed, setIsNotProggresed] = useState<boolean>(false);


    function clickHandle() {
        setIsProgressed(false)
        setIsNotProggresed(true)
        setProgressBar(0.5)
    }

    function goToCore() {
        setProgressBar(1)
        setTimeout(() => {
            navigation.navigate('App')
        }, 600)
    }

    return (
        <>
            <View style={{alignSelf: 'center', marginTop: 50}}>

                <ColoredBackgroundView color={defaultColors.primary.secondary}>
                    <AnimatePresence exitBeforeEnter>
                        {isProgressed ? <MotiView from={{opacity: 1}}
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
                            </MotiView> :
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
                            </MotiView>}
                    </AnimatePresence>
                </ColoredBackgroundView>
            </View>


            <View style={{width: 300, alignSelf: 'center', marginTop: 45,}}>
                <AnimatePresence exitBeforeEnter>
                    {isProgressed && <MotiView key='2' from={{opacity: 0, translateX: 0, translateY: 250}}
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
                            style={[human.title1, {textAlign: 'center'}]}>
                            Promote yourself
                        </Text>
                    </MotiView>}
                    {isNotProggresed && <MotiView key='3' from={{opacity: 0, translateX: 0, translateY: 250,}}
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
                            style={[human.title1, {textAlign: 'center'}]}>
                            Earn diamonds
                        </Text>
                    </MotiView>}
                </AnimatePresence>

                <AnimatePresence exitBeforeEnter>
                    {isProgressed ? <MotiView key='1' from={{opacity: 0, translateX: 0}}
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
                        <Text style={[human.title3, {
                            marginBottom: 70,
                            marginTop: 20,
                            opacity: 0.9,
                            textAlign: 'center'
                        }]}>
                            post your videos or profile and get likes and followers
                        </Text>
                    </MotiView> : <MotiView key='4' from={{opacity: 0, translateX: 0}}
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
                        <Text style={[human.title3, {
                            marginBottom: 70,
                            marginTop: 20,
                            opacity: 0.9,
                            textAlign: 'center'
                        }]}>
                            get diamonds by rating other people's videos
                        </Text>
                    </MotiView>}

                </AnimatePresence>
            </View>

            {isProgressed ? <Button onPress={clickHandle} style={{
                    width: '55%',
                    backgroundColor: defaultColors.primary.secondary,
                    borderColor: defaultColors.primary.secondary,
                    alignSelf: 'center'
                }}><Text>Next</Text></Button> :
                <Button onPress={goToCore} style={{
                    width: '55%',
                    backgroundColor: defaultColors.primary.secondary,
                    borderColor: defaultColors.primary.secondary,
                    alignSelf: 'center'
                }}><Text>Get Started</Text></Button>}
            <Progress.Bar
                progress={progressBar}
                width={200}
                color={defaultColors.primary.secondary}
                style={{marginTop: "10%", alignSelf: "center"}}
            />
        </>
    );
};

export default AboutScreen;
