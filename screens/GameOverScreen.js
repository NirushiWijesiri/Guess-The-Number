import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>GAME OVER!</Text>
            <Text>Number of Rounds: {props.roundsNumber}</Text>
            <Text>Number Was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
    }
})

export default GameOverScreen;