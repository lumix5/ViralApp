import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {defaultColors} from "../colors/AppPallete";
import MyButton from "../UI/MyButton";
import {Avatar} from 'react-native-elements';
import {human} from "react-native-typography";
import {exchange} from "../mockData/followersExchangeMock";
import FollowerExchange, {ExchangeProps} from "../components/FollowerExchange";
import CurrencyExchange from "../components/CurrencyExchange";
import ColoredBackgroundView from '../UI/ColoredBackgroundView';


let image = {
    uri: 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg'
}


const ProfileTab = () => {
    return (
        <ScrollView style={{backgroundColor: defaultColors.primary.main,}}>
            <View style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 40,
            }}>
                <View style={[styles.shadow, styles.profileHeight]}>
                    <View style={{
                        display: "flex",
                        flexDirection: 'row',
                        justifyContent: "space-around",
                        alignItems: 'center',
                        flex: 0.5
                    }}>
                        <Avatar
                            size={82}
                            rounded
                            source={{uri: 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg'}}
                        />
                        <Text style={human.title3}>@Lumix111111111111</Text>
                    </View>
                    <View style={{
                        display: "flex",
                        flexDirection: 'row',
                        justifyContent: "space-around",
                        alignItems: 'center',
                        flex: 0.5
                    }}>
                        <View style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={[human.title3, {
                                backgroundColor: defaultColors.primary.main, borderRadius: 25,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.22,
                                shadowRadius: 2.22,
                                display: "flex", justifyContent: 'center', textAlign: 'center',
                                color: defaultColors.primary.text,
                                width: 50,
                            }]}>10</Text>
                            <Text style={[human.title3, {color: 'white', marginTop: 5}]}>💎</Text>
                        </View>
                        <View style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={[human.title3, styles.random]}>15</Text>
                            <Text style={[human.title3, {color: 'white', marginTop: 5,}]}>Followers</Text>
                        </View>
                    </View>
                </View>

                <ColoredBackgroundView style={{width: '80%', maxWidth: 400}}>
                    {exchange.map((item) => {
                        return (
                            <MyButton
                                accessoryLeft={<FollowerExchange {...item} />}
                                accessoryRight={<CurrencyExchange {...item} />}
                                key={item.followers}
                                appearance='filled' status='control'
                            >
                            </MyButton>
                        )
                    })}
                </ColoredBackgroundView>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    random: {
        backgroundColor: defaultColors.primary.main,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            display: "flex",
            justifyContent: 'center',
            textAlign: 'center',
            color: defaultColors.primary.text,
        },
    },
    shadow: {
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        backgroundColor: defaultColors.primary.secondary,
        width: '80%',
        marginVertical: 10,
        maxWidth: 400,
    },
    profileHeight: {
        height: '20%',
    },
    buttonShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
})

export default ProfileTab;
