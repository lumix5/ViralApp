import React from 'react';
import {Avatar} from "@ui-kitten/components";
import {StyleSheet, View, Text} from "react-native";
import {human} from 'react-native-typography';
import {defaultColors} from "../colors/AppPallete";

const ProfileInfos = () => {
    return (
        <View style={[styles.shadow, styles.profileHeight]}>
            <View style={styles.avatarInfoContainer}>
                <Avatar
                    size={82}
                    rounded
                    source={{uri: 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg'}}
                />
                <Text style={human.title3}>@Name</Text>
            </View>
            <View style={styles.profileBottomContainer}>
                <View style={styles.centered}>
                    <Text style={[human.title3, styles.containerDiamonds]}>10</Text>
                    <Text style={[human.title3, styles.textWhiteMT]}>💎</Text>
                </View>
                <View style={styles.centered}>
                    <Text style={[human.title3, styles.diamonds]}>15</Text>
                    <Text style={[human.title3, styles.textWhiteMT]}>Followers</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
    diamonds: {
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
   
})

export default ProfileInfos;
