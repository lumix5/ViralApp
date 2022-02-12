import React, {useState} from "react";
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {human} from "react-native-typography";
import {Icon} from 'react-native-elements'
import Card from '../components/Card';
import {Card as CardType} from '../types/Card'
import {MotiView} from 'moti'
import ColoredBackgroundView from "../UI/ColoredBackgroundView";
import {exchange} from "../mockData/followersExchangeMock";
import MyButton from "../UI/MyButton";
import CurrencyExchange from "../components/CurrencyExchange";
import FollowerExchange from "../components/FollowerExchange";

let mockarray = [
    {
        image:
            "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/aec392067ba8427ea169906f1aa50b5e_1643625904~tplv-dmt-logom:tos-alisg-i-0000/74d67aee66124e089988749b3205d643.image?x-expires=1643670000&x-signature=lmTFPZzAhf0D5POWcWl7jg9Gf0c%3D",
        likes: 25,
        comments: 25,
    },
    {
        image:
            "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/aec392067ba8427ea169906f1aa50b5e_1643625904~tplv-dmt-logom:tos-alisg-i-0000/74d67aee66124e089988749b3205d643.image?x-expires=1643670000&x-signature=lmTFPZzAhf0D5POWcWl7jg9Gf0c%3D",
        likes: 25,
        comments: 25,
    },
    {
        image:
            "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/aec392067ba8427ea169906f1aa50b5e_1643625904~tplv-dmt-logom:tos-alisg-i-0000/74d67aee66124e089988749b3205d643.image?x-expires=1643670000&x-signature=lmTFPZzAhf0D5POWcWl7jg9Gf0c%3D",
        likes: 25,
        comments: 26,
    },
    {
        image:
            "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/aec392067ba8427ea169906f1aa50b5e_1643625904~tplv-dmt-logom:tos-alisg-i-0000/74d67aee66124e089988749b3205d643.image?x-expires=1643670000&x-signature=lmTFPZzAhf0D5POWcWl7jg9Gf0c%3D",
        likes: 25,
        comments: 25,
    },
    {
        image:
            "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/aec392067ba8427ea169906f1aa50b5e_1643625904~tplv-dmt-logom:tos-alisg-i-0000/74d67aee66124e089988749b3205d643.image?x-expires=1643670000&x-signature=lmTFPZzAhf0D5POWcWl7jg9Gf0c%3D",
        likes: 25,
        comments: 25,
    },
    {
        image:
            "https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/e4cf658ecae7443898c20bd7abd43ae8_1643617131~tplv-dmt-logom:tos-alisg-i-0000/d954f1e51f244549972b4c9b0fe35dcc.image?x-expires=1643724000&x-signature=XuMt%2FhXoP7FsDzkDCjOmMTwlvyw%3D",
        likes: 25,
        comments: 25,
    },
]

const empty = null;

function log() {
    console.log(5)
}

const PromoteVideoTab = () => {
    const [activeCard, setActiveCard] = useState<CardType | null>(empty);

    return (<ScrollView>
            <View style={styles.container}>
                <Text style={human.largeTitle}>{activeCard ? '' : 'Pick a card'}</Text>
                <View style={styles.mapContainer}>
                    {activeCard != empty ?
                        <View style={{display: 'flex', alignItems: 'center', width: '100%'}}>
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
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingRight: 25
                                    }}>
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
                                      }} style={{width: '80%', alignItems: 'center'}}>
                                <ColoredBackgroundView style={{width: '90%', maxWidth: 350}}>
                                    {exchange.map((item) => {
                                        return (
                                            <MyButton
                                                accessoryLeft={<FollowerExchange {...item} />}
                                                accessoryRight={<CurrencyExchange {...item} />}
                                                key={item.followers}
                                                onClick={log}
                                                appearance='filled' status='control'
                                            />

                                        );
                                    })}
                                </ColoredBackgroundView>
                            </MotiView>
                        </View>
                        :
                        <>

                            {
                                mockarray.map((card: CardType, index: number) => {
                                    return (
                                        <Pressable onPress={() => {
                                            setActiveCard(card)
                                        }} key={card.image}>

                                            <MotiView from={{
                                                opacity: 0.1,
                                                scale: 0.9,
                                            }}
                                                      animate={{
                                                          opacity: 1,
                                                          scale: 1,
                                                      }}
                                                      exit={{
                                                          opacity: 0,
                                                          scale: 0.9,
                                                      }}>
                                                <Card {...card} />
                                            </MotiView>
                                        </Pressable>
                                    )
                                })
                            }
                        </>
                    }
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    mapContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: '100%',
        justifyContent: "center",
    },
    primaryText: {},
});

export default PromoteVideoTab;
