import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { subscribeToProducts } from "../../../types/product";
import { ProductItem } from "../../../components/product-item";
import { Product } from "../../../types/product";
import { SeparatorItem } from "../../../components/separatorItem";

export default function Screen() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const unsubscribe = subscribeToProducts(setProducts);
        return () => unsubscribe();
    }, []);

    return (
        <View style={styles.container}>
            {/* Linha separadora central */}
            <View style={styles.centralLine} />
            <FlatList
                ItemSeparatorComponent={SeparatorItem}
                data={products}
                renderItem={({ item }) => <ProductItem data={item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2} // Define duas colunas
                columnWrapperStyle={styles.columnWrapper} // Estilo para espaçamento entre colunas
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
        padding: 10,
    },
    columnWrapper: {
        justifyContent: 'space-between', // Garante o espaçamento entre os itens
    },
    centralLine: {
        position: 'absolute',
        left: '50%',
        top: 0,
        bottom: 0,
        width: 1, // Largura da linha
        backgroundColor: '#808080', // Cor da linha (ajuste conforme necessário)
    },
});
