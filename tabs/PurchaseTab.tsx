import React from 'react';
import {StyleSheet, View} from 'react-native'
import ColoredBackgroundView from '../UI/ColoredBackgroundView';
import MyButton from '../UI/MyButton';
import StarsBuyLeftAccessory from '../components/StarsBuyLeftAccessory';
import StarsBuyRightAccessory from '../components/StarsBuyRightAccessory';
import {Button} from "@ui-kitten/components";
import {human} from 'react-native-typography';
import {buystartmock} from "../mockData";


const PurchaseTab = () => {
    return (
        <View style={styles.fullScreenCentered}>
            <ColoredBackgroundView style={{maxWidth: 500, width: '80%'}}>
                {buystartmock.map((offer) => {
                    return (
                        <MyButton appearance='filled' status='control'
                                  accessoryLeft={<StarsBuyLeftAccessory {...offer} />}
                                  accessoryRight={<StarsBuyRightAccessory {...offer} />}/>
                    ) 
                })}
                <MyButton appearance='filled' status='info' accessoryLeft={<StarsBuyLeftAccessory/>} accessoryRight={<StarsBuyRightAccessory/>}/>
            </ColoredBackgroundView>
            <ColoredBackgroundView style={styles.buttonGroupContainer}>
                <Button status='control' style={[styles.utilsButton, human.headline]}>Policy and Terms</Button>
                <Button status='control' style={styles.utilsButton}>Contact Us</Button>
                <Button status='control' style={styles.utilsButton}>+20 Free Diamonds</Button>
                <Button status='control' style={styles.utilsButton}>Logout</Button>
            </ColoredBackgroundView>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonGroupContainer: {
        maxWidth: 500, width: '80%'
    },
    fullScreenCentered: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttonGroup: {
        margin: 2,
    },
    utilsButton: {
        margin: 5
    }
});

export default PurchaseTab;
