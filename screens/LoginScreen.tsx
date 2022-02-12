import React, {useState} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import ColoredBackgroundView from "../UI/ColoredBackgroundView";
import {Button, Card, Input, Modal} from "@ui-kitten/components";
import {human} from "react-native-typography";
import {AnimatePresence, MotiView} from 'moti'


const LoginScreen = ({navigation}) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);


    const isAuth = true

    return (
        <View style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ColoredBackgroundView style={{
                minHeight: 215,
                height: '20%',
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <View style={{paddingBottom: 15}}>
                    <Text style={[{textAlign: 'center'}, human.largeTitleWhite]}>Welcome!</Text>
                    <Text style={[{textAlign: 'center'}, human.calloutWhite]}>Username to continue</Text>
                </View>
                <Input
                    placeholder="Username"
                    textStyle={[{marginLeft: 40, position: 'absolute'}, human.body]}
                    accessoryLeft={<Image
                        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/At_sign.svg/2048px-At_sign.svg.png'}}/>}
                />
                {/* <Input
            style={{ fontSize: 50 }}
            _light={{
              bg: "coolGray.100"
            }} _dark={{
              bg: "coolGray.800"
            }} w={{
              base: "100%",
              md: "100%"
            }} InputLeftElement={<Text style={[{ fontSize: 5, color: 'black', marginLeft: 5, marginBottom: 5 }, human.largeTitle]}>@</Text>} placeholder="Login" /> */}
                <View>
                </View>
                <View>
                    <Button onClick={console.log(5)} status='control' onPress={() => navigation.navigate('About')}>
                        <Text style={human.body}>Continue</Text>
                    </Button>
                </View>
            </ColoredBackgroundView>
            <Button onPress={() => {
                setIsTooltipVisible(true)
            }}>
                Cannot find your username?
            </Button>
            <AnimatePresence exitBeforeEnter>
                <Modal
                    visible={isTooltipVisible}
                    backdropStyle={styles.backdrop}
                    onBackdropPress={() => setIsTooltipVisible(false)}>

                    <MotiView exit={{scale: 0.8}} from={{scale: 0.9}} animate={{scale: 1}} transition={{
                        type: 'timing',
                        duration: 100,
                    }}>
                        <Card disabled={true}>
                            <Image style={{height: 230, width: 340, marginVertical: 5}}
                                   source={require('../assets/new.png')}/>
                            <Button onPress={() => setIsTooltipVisible(false)}>
                                Close
                            </Button>
                        </Card>
                    </MotiView>

                </Modal>
            </AnimatePresence>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: 192,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export default LoginScreen;
