import React, {useState} from "react";
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {human} from "react-native-typography";
import {Card as CardType} from '../types/Card'
import AloneCard from "../components/AloneCard";
import CardList from "../components/CardList";


const PromoteVideoTab = () => {
    const empty = null;
    const [activeCard, setActiveCard] = useState<CardType | null>(empty);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={human.largeTitle}>{!activeCard && 'Pick a card'}</Text>
                <View style={styles.mapContainer}>
                    {activeCard !== empty ? <AloneCard activeCard={activeCard} setActiveCard={setActiveCard}/> : <CardList setActiveCard={setActiveCard}/>}
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
