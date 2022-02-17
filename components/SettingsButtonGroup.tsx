import React from 'react';
import {StyleSheet} from "react-native";
import {Button} from "@ui-kitten/components";
import {human} from "react-native-typography";

const SettingsButtonGroup = () => {
    return (
        <>
        <Button status='control' style={[styles.utilsButton, human.headline]}>Policy and Terms</Button>
        <Button status='control' style={styles.utilsButton}>Contact Us</Button>
        <Button status='control' style={styles.utilsButton}>+20 Free Diamonds</Button>
        <Button status='control' style={styles.utilsButton}>Logout</Button>
        </>
    );
};

const styles = StyleSheet.create({
    utilsButton: {
        margin: 5
    }
})

export default SettingsButtonGroup;
