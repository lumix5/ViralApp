import React from 'react';
import {MotiView} from "moti";
import {Pressable, StyleSheet, View} from "react-native";
import {Icon} from "react-native-elements";
import Card from "./Card";
import ColoredBackgroundView from "../UI/ColoredBackgroundView";
import {exchange} from "../mockData/followersExchangeMock";
import MyButton from "../UI/MyButton";
import FollowerExchange from "./FollowerExchange";
import CurrencyExchange from "./CurrencyExchange";

const AloneCard = (setActiveCard, activeCard) => {
    
    const empty = null
    
    return (
        <View style={styles.centerY}>
            <MotiView from={{
                opacity: 0,
            }}
                      animate={{
                          opacity: 1,
                      }}
                      exit={{
                          opacity: 0,
                      }}>
                <Pressable onPress={() => setActiveCard(empty)}>
                    <View style={styles.cardContainer}>
                        <View>
                            <Icon
                                name='corner-up-left'
                                type='feather'
                                color='black'
                            />
                        </View>
                        <Card {...activeCard} />
                    </View>
                </Pressable>
            </MotiView>

            <MotiView from={{
                opacity: 0,
            }}
                      animate={{
                          opacity: 1,
                      }}
                      exit={{
                          opacity: 0,
                      }}
                      style={styles.widthCenterX}>
                <ColoredBackgroundView style={styles.widthAndMax}>
                    {exchange.map((item) => {
                        return (
                            <MyButton
                                accessoryLeft={<FollowerExchange {...item} />}
                                accessoryRight={<CurrencyExchange {...item} />}
                                key={item.followers}
                                appearance='filled' status='control'
                            />
                        );
                    })}
                </ColoredBackgroundView>
            </MotiView>
        </View>
    );
};

const styles = StyleSheet.create({
    widthCenterX: {
        width: '80%',
        alignItems: 'center',
    },
    centerY: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 25,
    },
    widthAndMax: {
        width: '90%',
        maxWidth: 350,
    },
})


export default AloneCard;
