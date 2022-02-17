import React, {useState} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import ColoredBackgroundView from "../UI/ColoredBackgroundView";
import {Button, Card, Input, Modal} from "@ui-kitten/components";
import {human} from "react-native-typography";
import {AnimatePresence, MotiView} from 'moti'
import ModalLoginScreen from "../components/ModalLoginScreen";
import {atSignIcon} from "../mockData";


const LoginScreen = ({ navigation }) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [isFirstLaunch, setIsFirstLaunch] = useState(true)
    
    return (
        <View style={styles.parentContainer}>
            <ColoredBackgroundView style={styles.coloredContainer}>
                <View style={styles.welcomePadding}>
                    <Text style={[styles.textAlignCenter, human.largeTitleWhite]}>Welcome!</Text>
                    <Text style={[styles.textAlignCenter, human.calloutWhite]}>Username to continue</Text>
                </View>
                <Input
                    placeholder="Username"
                    textStyle={[styles.inputTextStyle, human.body]}
                    accessoryLeft={<Image
                        source={{uri: atSignIcon}}/>}
                />
                <View>
                </View>
                <View>
                    <Button status='control' onPress={() => navigation.navigate(isFirstLaunch ? 'About' : 'App')}>
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
                <ModalLoginScreen setIsTooltipVisible={setIsTooltipVisible} isTooltipVisible={isTooltipVisible}/>
            </AnimatePresence>
        </View>
    );
};

const styles = StyleSheet.create({
    welcomePadding: {
        paddingBottom: 15,
    },
    textAlignCenter: {
        textAlign: 'center',
    },
    inputTextStyle: {
        marginLeft: 40,
        position: 'absolute',
    },
    parentContainer: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    coloredContainer: {
        minHeight: 215,
        height: '20%',
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    container: {
        minHeight: 192,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export default LoginScreen;

