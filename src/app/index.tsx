import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, Text, ImageBackground } from "react-native";
import { IndexButton } from "../../components/indexButton";

import { router } from "expo-router";
import { useState } from "react";

export default function Screen() {

    const start = () => {
        router.replace('/home')
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={require('../../assets/harwareBack.jpg')}
                resizeMode="cover"
                style={styles.background}>
                    <Image
                    source={require('../../assets/chip.png')}
                    style={styles.logo}
                    resizeMode="cover"
                />

                <Text style={styles.h1}>Bem-vindo à HardKores</Text>
                <Text style={styles.h2}>Sua loja de hardwares predileta</Text>


                
                <IndexButton
                    title="INICIAR"
                    onPress={start}
                />
            </ImageBackground>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        justifyContent: 'center',
        alignItems: "center",
        width: '100%',
        flex: 1
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: '20%',
    },
    h1: {
        fontSize: 26,
        fontWeight: 'bold',
        bottom: 40,
        color: "#AAFFAA",
        letterSpacing: 0.1,
    },
    h2: {
        fontSize: 16,
        color: "#AAFFAA",
        bottom: 40
    }
})