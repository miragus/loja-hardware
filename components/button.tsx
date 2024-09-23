import { Pressable, Text, StyleSheet, Image } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
}

export const Button = ({ title, onPress }: Props) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
            <Image style={styles.cart} source={{ uri: 'https://www.iconsdb.com/icons/preview/white/cart-2-xxl.png' }} />
        </Pressable>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000885',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25,
        flexDirection: 'row'
    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center'
    },
    cart: {
        width: 15,
        height: 15,
        marginLeft: 5,
        marginTop: 5
    }
})