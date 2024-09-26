import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
}

export const Button = ({ title, onPress }: Props) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#AAFFAA',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25,
        flexDirection: 'row',
        marginTop: 200,
        bottom: 70,
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    cart: {
        width: 15,
        height: 15,
        marginLeft: 5,
        marginTop: 5
    }
})