import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import MyButton from "../UI/MyButton";
import {human} from 'react-native-typography'

const SliderTab = () => {
    const [visible, setVisible] = useState(true);


    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <ImageBackground style={styles.sliderContainer} imageStyle={{borderRadius: 15}}
                                 source={{uri: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/eb5992520765b48042c5687a84125423~c5_720x720.jpeg?x-expires=1644303600&x-signature=w92YkGrIwK4fstHL3IAo1AlUD%2Bo%3D'}}>
                    <Text style={[human.headlineWhite, styles.m4]}>@Username</Text>
                </ImageBackground>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.widthMarginH}>
                    <MyButton appearance='outline' status='basic'
                              style={styles.skipButton}>Skip</MyButton></View>
                <View style={styles.marginHorizontalWHalf}>
                    <MyButton style={styles.likeButton}>❤️+ 1💎</MyButton></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sliderContainer: {
        borderRadius: 15,
        width: '95%',
        height: '50%',
        maxWidth: 500,
    },
    skipButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '25%',
    },
    likeButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '25%',
    },
    marginHorizontalWHalf: {
        marginHorizontal: 15,
        width: '50%',
    },
    m4: {
        margin: 10,
    },
    widthMarginH: {
        marginHorizontal: 15,
        width: '30%',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '95%',
        maxWidth: 500,
    },
    container: {
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: "white"
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
    }
});

export default SliderTab;
