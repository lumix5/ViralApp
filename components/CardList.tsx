import React from 'react';
import {Card as CardType} from "../types/Card";
import {Pressable} from "react-native";
import {MotiView} from "moti";
import Card from "./Card";
import {mockarray} from "../mockData/cardarray";

const CardList = (setActiveCard) => {
    return (
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
    );
};

export default CardList;
