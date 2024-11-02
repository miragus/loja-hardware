import { View, StyleSheet, FlatList, Text } from "react-native";
import { ProductItem } from "../../../../components/product-item";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { getCategoryById } from "../../../../services/category";
import { useEffect, useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import { SeparatorItem } from "../../../../components/separatorItem";

export default function Screen(){
    const { id } = useLocalSearchParams();
    const idCategory = parseInt(id as string);
    const category = getCategoryById(idCategory);
    const [products, setProducts] = useState([]);

    if (!category) return router.back();

    useEffect(() => {
        const unsubscribe = firebase.firestore()
            .collection('Products')
            .where('idCategory', '==', idCategory)
            .onSnapshot(snapshot => {
                const fetchedProducts = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(fetchedProducts);
            }, error => {
                console.error("Erro ao escutar produtos:", error);
            });
    
        return () => unsubscribe();
    }, [idCategory]);
    

    return (
        <View style={styles.container}>
            <View style={styles.centralLine} />

            <Stack.Screen 
                options={{
                    title: category.title, 
                    headerStyle: { backgroundColor: '#2E2E2E' }, 
                    headerTintColor: '#CCFFCC'
                }}
            />
            {products.length > 0 ? (
                <FlatList
                    ItemSeparatorComponent={SeparatorItem}
                    data={products}
                    renderItem={({ item }) => <ProductItem data={item} />}
                    keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContent}
                    
                numColumns={2} // Define duas colunas
                columnWrapperStyle={styles.columnWrapper} 


                />
            ) : (
                <Text style={styles.noProductsText}>Nenhum produto encontrado nesta categoria.</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E2E2E'
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 10,
    },
    noProductsText: {
        color: '#CCFFCC',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
    },
    columnWrapper: {
        justifyContent: 'space-between', 
    },
    centralLine: {
        position: 'absolute',
        left: '50%',
        top: 0,
        bottom: 0,
        width: 1,
        backgroundColor: '#808080', 
    },
    listContent: {
        padding: 10,
    },
});
