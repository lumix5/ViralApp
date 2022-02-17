import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {defaultColors} from "../colors/AppPallete";
import ColoredBackgroundView from '../UI/ColoredBackgroundView';
import ProfileInfos from "../components/ProfileInfos";
import ProfileTabExchange from "../components/ProfileTabExchange";


let image = {
    uri: 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg'
}

const ProfileTab = () => {
    return (
        <ScrollView style={styles.backgroundColorScroll}>
            <View style={styles.profileTabContainer}>
                <ProfileInfos />
                <ColoredBackgroundView style={styles.width}>
                    <ProfileTabExchange />
                </ColoredBackgroundView>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    backgroundColorScroll: {
        backgroundColor: defaultColors.primary.main
    },
    width: {
        width: '80%',
        maxWidth: 400,
    },
    textWhiteMT: {
        color: 'white',
        marginTop: 5,
    },
    containerDiamonds: {
        backgroundColor: defaultColors.primary.main,
        borderRadius: 25,
        margin: 15,
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
    centered: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileBottomContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        flex: 0.5,
    },
    avatarInfoContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        flex: 0.5,
    },
    profileTabContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40,
    },
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
