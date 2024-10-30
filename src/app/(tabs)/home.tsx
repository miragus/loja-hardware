
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
