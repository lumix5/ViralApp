import React from 'react';
import {StyleSheet, View} from 'react-native'
import ColoredBackgroundView from '../UI/ColoredBackgroundView';
import MyButton from '../UI/MyButton';
import StarsBuyLeftAccessory from '../components/StarsBuyLeftAccessory';
import StarsBuyRightAccessory from '../components/StarsBuyRightAccessory';
import {Button} from "@ui-kitten/components";
import {human} from 'react-native-typography';

const buystartmock = [{currency: 50, money: 2, off: 0}, {currency: 50, money: 2, off: 17}, {
    currency: 50,
    money: 2,
    off: 29
}, {currency: 50, money: 2, off: 33}, {currency: 50, money: 2, off: 36}, {currency: 50, money: 2, off: 38}]

const PurchaseTab = () => {
    return (
        <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <ColoredBackgroundView style={{maxWidth: 500, width: '80%'}}>
                {buystartmock.map((offer) => {
                    return (
                        <MyButton appearance='filled' status='control'
                                  accessoryLeft={<StarsBuyLeftAccessory {...offer} />}
                                  accessoryRight={<StarsBuyRightAccessory {...offer} />}/>
                    )
                })}
                <MyButton appearance='filled' status='info' accessoryLeft={<StarsBuyLeftAccessory/>}
                          accessoryRight={<StarsBuyRightAccessory/>}/>
            </ColoredBackgroundView>
            <ColoredBackgroundView style={{maxWidth: 500, width: '80%'}}>
                <Button status='control' style={[styles.utilsButton, human.headline]}>Policy and Terms</Button>
                <Button status='control' style={styles.utilsButton}>Contact Us</Button>
                <Button status='control' style={styles.utilsButton}>+20 Free Diamonds</Button>
                <Button status='control' style={styles.utilsButton}>Logout</Button>
            </ColoredBackgroundView>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonGroup: {
        margin: 2,
    },
    utilsButton: {
        margin: 5
    }
});

export default PurchaseTab;
