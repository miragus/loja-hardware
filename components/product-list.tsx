import { Link } from "expo-router";
import { Product } from "../types/product";
import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { useState } from "react";

type Props = {
    data: Product;
}

export const ListItem = ({ data }: Props) => {
    const [imageUri, setImageUri] = useState(data.image); 

    return (
        <Link href={`/product/${data.id}`} asChild>
            <Pressable
                style={({ pressed }) => [
                    styles.container,
                    { opacity: pressed ? 0.8 : 1 },
                ]}
            >
                
                <View style={{width: '100%', flexDirection: 'row', alignItems:'center'}}>
                    <Image
                    style={styles.img}
                    source={{ uri: imageUri }}
                    resizeMode="cover"
                    onError={() => setImageUri("../../assets/erro.jpg")} 
                />
                <View>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text>
                </View>
                    

                </View>
                
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   
        borderWidth: 1 
    },
    img: {
        width: 65,
        height:45,
        borderRadius: 10,
        backgroundColor: "#CCCCCC",
        marginRight: 20,
        
    },
    
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#000000",
    },
    description: {
        fontSize: 13,
        color: "#EEEEEE",
        marginBottom: 10,
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#000000",
        textAlign: 'center',
        borderRadius: 5,
    },
});
