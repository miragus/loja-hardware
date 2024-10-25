 import { Link } from "expo-router";
import { Product } from "../types/product"
import { Pressable, Text, StyleSheet, Image, View } from "react-native";

type Props = {
    data: Product;
}

export const ProductItem = ({ data }: Props) => {
    return (
        // rota dinamica
        <Link href={`/product/${data.id}`} asChild>
            <Pressable style={styles.container}>
                <Image
                    style={styles.img}
                    source={{ uri: data.image }}
                    resizeMode="cover"
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.description}>{data.description}</Text>
                    <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text>
                </View>
            </Pressable>
        </Link>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 20
    },
    img: {
        width: 120,
        height: 120,
        borderRadius: 10,
        backgroundColor: "#CCCCCC",
        marginRight: 20,
    },
    info: {
        flex: 1
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#FFFFFF"
    },
    description: {
        fontSize: 13,
        color: "#EEEEEE",
        marginBottom: 10
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#CCFFCC",
        textAlign: 'center',
        backgroundColor: "#222222",
        borderRadius: 5,
    }
})