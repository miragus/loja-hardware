// [id].tsx
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Image, Text, StyleSheet, View } from 'react-native';
import { Button } from '../../../components/button';
import { useRoute } from '@react-navigation/native';
import { fetchProductById } from '../../../services/product';
import { Stack } from 'expo-router';

export default function ProductDetails() {
    const route = useRoute();
    const { id } = route.params; // Obtém o ID do produto da rota
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Busca os detalhes do produto usando o ID
        const getProduct = async () => {
            const fetchedProduct = await fetchProductById(id);
            setProduct(fetchedProduct);
        };
        getProduct();
    }, [id]);

    const comprar = () => {
        // Função para lidar com a compra do produto
        alert('Produto comprado!');
    };

    if (!product) {
        return <Text>Carregando...</Text>; // Exibe um carregando enquanto os detalhes do produto são buscados
    }

    return (
        <SafeAreaView style={styles.container} >
            <Stack.Screen options={{
                title: 'Produto',
                headerStyle: { backgroundColor: '#2E2E2E' },
                headerTintColor: '#CCFFCC'
            }}
            />
            <ScrollView style={styles.area}>
                <Image
                    style={styles.img}
                    source={{ uri: product.image }}
                    resizeMode="cover"


                />
                <Text style={styles.title}> {product.title}</Text>
                <Text style={styles.description}> {product.description}</Text>
                <View style={styles.priceArea}>
                    <Text style={styles.price}> R$ {product.price.toFixed(2)}

                    </Text>
                </View>

                <Button
                    title="COMPRAR"
                    onPress={comprar}

                />

            </ScrollView>
                



        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E2E2E',
        justifyContent: 'center',
    },

    area: {
        flex: 1,
        padding: 10,

    },
    ButtonArea: {
        padding: 10,
    },
    img: {
        width: "100%",
        height: 250,
        borderRadius: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 29,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FFFFFF'
    },
    description: {
        fontSize: 15,
        marginBottom: 20,
        color: '#FFFFFF'
    },

    priceArea: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#cccccc'
    },
    price: {
        fontSize: 25,
        textAlign: 'center',
        color: '#FFFFFF'


    }
});