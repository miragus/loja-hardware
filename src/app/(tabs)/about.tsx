import { View, Text, StyleSheet, Image } from "react-native";

export default function Screen() {
    return (
        <View style={styles.container}>


            <View style={styles.eu}>
                <Image
                    style={styles.icon}
                    source={{ uri: 'https://cdn.openart.ai/uploads/image_U61lpHe0_1677057215495_512.webp' }}
                />

                <View style={{ flexDirection: 'row'}}>

                    <Text style={{ fontSize: 26, marginTop: 10, color: '#AAFFAA' }}>Olá, me chamo Gustavo</Text>
                    <Image
                        style={styles.hello}
                        source={require('../../../assets/ola.png')}
                    />
                </View>



            </View>

            <View style={styles.separatorItem} />

            <View style={{ width: "90%" }}>

                <Text style={styles.apresentacao}>
                    Tenho 19 anos, sou estudante de análise e desenvolvimento de sistemas do Senac.
                </Text>

            </View>

            <View style={styles.separatorItem} />

            <Text style={styles.apresentacao}>
                    Esse é o meu projeto de loja virtual utilizando react-native. 
                    e nois tmj mlk
                </Text>





        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E1E1E",
        alignItems: 'center'
    },
    icon: {
        width: 200,
        height: 200,
        borderWidth: 3,
        borderColor: '#808080'
    },
    hello: {
        width: 40,
        height: 40,
        top: 10,
        left: 5
    },
    eu: {
        width: '100%',
        height: 220,
        flexDirection: "column",
        alignItems: 'center',
        marginBottom: 25,
        paddingTop: 10,


    },
    theGoat: {
        fontSize: 15,
        color: '#8D8D8F'
    },
    apresentacao: {
        fontSize: 17,
        textAlign: 'center',
        color: '#AAFFAA'
    },
    separatorItem: {
        height: 1,
        width: "90%",
        backgroundColor: "#808080",
        margin: 25
    }
})