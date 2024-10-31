// home.tsx
import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { subscribeToProducts } from "../../../types/product";
import { ProductItem } from "../../../components/product-item";
import { Product } from "../../../types/product";
import { SeparatorItem } from "../../../components/separatorItem";

export default function Screen() {
    const [products, setProducts] = useState<Product[]>([]);


    //Atualiza a lista de produtos quando o componente é exibido com o useEffect e para de atualizar quando ele sai da tela com o unsubscribe
    useEffect(() => {
        const unsubscribe = subscribeToProducts(setProducts);
        return () => unsubscribe();
    }, []);


    return (
        <View style={styles.container}>
            <FlatList
                ItemSeparatorComponent={SeparatorItem}
                data={products}
                renderItem={({ item }) => <ProductItem data={item} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContent}
                
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303030',
    },
    listContent: {
    },
});


/*


import { View, StyleSheet, FlatList } from "react-native";
import { getAllProducts } from "../../../services/product";
import { ProductItem } from "../../../components/product-item";



export default function Screen() {
    const products = getAllProducts();
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem data={item} />}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.listContent}
                />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303030',
    },
    listContent: {
        padding: 20,
    }
});

*/