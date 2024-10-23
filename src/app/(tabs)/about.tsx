import { View, Text, StyleSheet, Image } from "react-native";

export default function Screen() {
    return (
        <View style={styles.container}>


            <View style={styles.eu}>
                <Image
                    style={styles.icon}
                    source={{ uri: 'https://images.rockol.it/H8oWOhOcZHGQKNPPWZt-hF8S1Pw=/700x394/smart/rockol-img/img/foto/upload/kanye-west.2018-05-24-13-13-07.jpg' }}
                />
                <Text style={{ fontSize: 26, marginTop: 10 }}>Olá, me chamo Gustavo</Text>
                <Text>{"\n"}</Text>


            </View>

            <View style={{ width: '90%', height: 1, backgroundColor: '#000000' }}></View>

            <View style={{ width: "90%" }}>
                <Text style={{ fontSize: 14, textAlign: 'center', marginTop: 35 }}> Olá, me chamo Gustavo, tenho 19 anos, sou estudante de análise e desenvolvimento de sistemas do Senac.</Text>

            </View>

            <View style={{ width: '90%', height: 1, backgroundColor: '#000000', marginTop: 35 }}></View>




        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF2F5',
        alignItems: 'center'
    },
    icon: {
        width: 160,
        height: 160,
        borderWidth: 3,
        borderColor: 'black'
    },
    eu: {
        width: '100%',
        height: 220,
        flexDirection: "column",
        alignItems: 'center',
        marginBottom: 25,
        paddingTop: 10

    },
    theGoat: {
        fontSize: 15,
        color: '#8D8D8F'
    }
})