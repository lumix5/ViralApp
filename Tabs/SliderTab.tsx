import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import MyButton from "../UI/MyButton";
import {human} from 'react-native-typography'

interface SliderTabProps {

}

const SliderTab = () => {
    const [visible, setVisible] = useState(true);

    return (
        <View style={styles.container}>
            <View style={{borderRadius: 15, width: '95%', height: '50%', maxWidth: 500}}>
                <ImageBackground style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                }} imageStyle={{borderRadius: 15}}
                                 source={{uri: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/eb5992520765b48042c5687a84125423~c5_720x720.jpeg?x-expires=1644303600&x-signature=w92YkGrIwK4fstHL3IAo1AlUD%2Bo%3D'}}>
                    <Text style={[human.headlineWhite, {margin: 10}]}>@Username</Text>
                </ImageBackground>
            </View>
            <View style={{
                display: 'flex',
                flexDirection: "row",
                justifyContent: 'space-between',
                width: '95%',
                maxWidth: 500
            }}>
                <View style={{marginHorizontal: 15, width: '30%'}}><MyButton appearance='outline' status='basic'
                                                                             style={{
                                                                                 display: 'flex',
                                                                                 justifyContent: 'center',
                                                                                 alignItems: 'center',
                                                                                 height: '25%'
                                                                             }}
                                                                             onClick={() => console.log(3)}>Skip</MyButton></View>
                <View style={{marginHorizontal: 15, width: '50%'}}>
                    <MyButton
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25%'}}
                        onClick={() => console.log(3)}>❤️+ 1💎</MyButton></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
