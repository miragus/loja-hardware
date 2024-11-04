import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import '../../firebase';
import { useRouter } from 'expo-router';

const ProductRegister = () => {
    const [idCategory, setIdCategory] = useState('');
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const router = useRouter();

    const handleSubmit = async () => {
        if (!idCategory || !image || !title || !description || !price) {
            alert("Todos os campos devem ser preenchidos!");
            return;
        }

        try {
            const numericPrice = parseFloat(price);
            const numericCategory = parseInt(idCategory);

            if (isNaN(numericPrice) || isNaN(numericCategory)) {
                alert("ID da categoria e preço devem ser números válidos!");
                return;
            }

            const newProduct = await firebase.firestore().collection("Products").add({
                idCategory: numericCategory,
                image,
                title,
                description,
                price: numericPrice,
            });

            alert("Produto registrado com sucesso! ID: " + newProduct.id);
            setIdCategory('');
            setImage('');
            setTitle('');
            setDescription('');
            setPrice('');

            router.push("../../secondaryList/secondaryList");

        } catch (error) {
            console.error("Erro ao registrar produto:", error);
            alert("Erro ao tentar registrar o produto.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Image
                    source={require('../../../assets/hardRegister.png')}
                    style={{ width: 50, height: 50, marginBottom: 10 }}
                />
                <Text style={styles.title}>Registrar Produto</Text>
                <TextInput style={styles.input} placeholder="Id de categoria" placeholderTextColor={'#ccc'} value={idCategory} onChangeText={setIdCategory} />
                <TextInput style={styles.input} placeholder="Nome" placeholderTextColor={'#ccc'} value={title} onChangeText={setTitle} />
                <TextInput style={styles.input} placeholder="URL da imagem" placeholderTextColor={'#ccc'} value={image} onChangeText={setImage} />
                <TextInput style={styles.input} placeholder="Descrição" placeholderTextColor={'#ccc'} value={description} onChangeText={setDescription} />
                <TextInput style={styles.input} placeholder="Preço" placeholderTextColor={'#ccc'} value={price} onChangeText={setPrice} keyboardType="numeric" />
            </View>
            <View style={styles.buttons}>
                <Pressable style={styles.button} onPress={() => router.replace("../secondaryList/secondaryList")}>
                    <Text style={styles.buttonText}>Ver lista</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Registrar</Text>
                </Pressable>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303030',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 100,
        gap: 40
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#AAFFAA'
    },
    input: {
        backgroundColor: "#1E1E1E",
        color: '#ccc',
        width: '65%',
        height: 40,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    buttons: {
        width: '65%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#AAFFAA',
        justifyContent: "center",
        borderRadius: 5,
        alignItems: 'center',
        width: "35%",
        aspectRatio: 2.10
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    }
});

export default ProductRegister;
