import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {defaultColors} from '../colors/AppPallete';
import {Card as CardProps} from '../types/Card'


const Card = ({likes, comments, image,}: CardProps) => {
    return (
        <View style={styles.card}>
            <Image
                source={{uri: image}}
                style={{
                    height: 123,
                    width: 103,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                }}
            ></Image>
            <Text style={styles.emojiLike}>❤️ {likes}</Text>
            <Text style={styles.emojiComments}>💬 {comments}</Text>
        </View>
    );
}

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
        maxWidth: 500,
        justifyContent: "center",
    },
    card: {
        margin: 15,
        backgroundColor: defaultColors.primary.secondary,
        borderRadius: 15,
        alignSelf: "flex-start",
    },
    emojiLike: {
        paddingLeft: 5,
        paddingTop: 5,
        color: "white",
    },
    emojiComments: {
        color: "white",
        padding: 5,
    },
});

export default Card;


