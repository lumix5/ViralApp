import React from 'react';
import {MotiView} from "moti";
import {Button, Card, Modal} from "@ui-kitten/components";
import {Image, StyleSheet} from "react-native";

const ModalLoginScreen = (setIsTooltipVisible, isTooltipVisible) => {
    return (
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
    );
};

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})

export default ModalLoginScreen;
