import { Text, View, SafeAreaView, StyleSheet, Alert, Button, FlatList, ScrollView } from "react-native";
import { Input } from "../../../components/input";
import { useProductDatabase, ProductDatabase } from "../../database/useProductDatabase";
import { useEffect, useState } from "react";
import { ProductItem } from "../../../components/product-item";

export default function ProductRegister() {
    const [id, setId] = useState('');
    const [idCategory, setIdCategory] = useState('');
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [search, setSearch] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState<ProductDatabase[]>([]);

    const productDatabase = useProductDatabase();

    async function create() {
        try {
            if (isNaN(Number(id))) {
                return Alert.alert("Id", "O Id precisa ser um número!");
            }
            if (isNaN(Number(idCategory))) {
                return Alert.alert("IdCategory", "O IdCategory precisa ser um número!");
            }
            if (isNaN(Number(price))) {
                return Alert.alert("Price", "O Price precisa ser um número!");
            }

            // Cria o novo produto no banco de dados
            const response = await productDatabase.create({
                id: Number(id),
                idCategory: Number(idCategory),
                image,
                title,
                description,
                price: Number(price),
            });

            // Adiciona o novo produto ao contexto para atualização automática da FlatList
            const newProduct = {
                id: Number(id),
                idCategory: Number(idCategory),
                image,
                title,
                description,
                price: Number(price),
            };
            Alert.alert("Produto cadastrado com sucesso!");

            // Limpa os campos
            setId('');
            setIdCategory('');
            setImage('');
            setTitle('');
            setDescription('');
            setPrice('');
        } catch (error) {
            console.log(error);
            Alert.alert("Erro", "Não foi possível cadastrar o produto.");
        }
    }

    async function list() {
        try {
            const response = await productDatabase.searchByName(search);
            setProducts(response);
        } catch (error) {
            console.log(error);
            Alert.alert("Erro", "Ocorreu um erro durante a listagem dos produtos.");
        }
    }

    useEffect(() => {
        list();
    }, [search]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Input placeholder="Id do produto" onChangeText={setId} value={id} />
                <Input placeholder="Id por categoria" onChangeText={setIdCategory} value={idCategory} />
                <Input placeholder="Imagem" onChangeText={setImage} value={image} />
                <Input placeholder="Nome" onChangeText={setTitle} value={title} />
                <Input placeholder="Descrição" onChangeText={setDescription} value={description} />
                <Input placeholder="Preço" onChangeText={setPrice} value={price} />
                <Button title="Salvar" onPress={create} />
            </ScrollView>

            {/* {products.length === 0 ? (
                <Text>Nenhum produto encontrado</Text>
            ) : (
                <FlatList
                    data={products}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <ProductItem data={item} />}
                />
            )} */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 32,
        gap: 16,
    },
});
