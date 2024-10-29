import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import '../../../firebase';
const App = () => {
    const [idCategory, setIdCategory] = useState('');
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');


    const handle = async () => {
        if (!idCategory || !image || !title || !description || !price) {
            alert("Todos os campos devem ser preenchidos!");
            return;
        }

        try {
            const numericPrice = parseFloat(price);
            const numericCategory = parseFloat(idCategory);

            if (isNaN(numericPrice) || isNaN(numericCategory)) {
                alert("ID da categoria e preço devem ser números válidos!");
                return;
            }

            const novoProduto = await firebase.firestore().collection("Products").add({
                idCategory: numericCategory,
                image: image,
                title: title,
                description: description,
                price: numericPrice
            });

            alert("Produto registrado com sucesso! ID: " + novoProduto.id);

            //esvazia os campos apos registrar produto
            setIdCategory('');
            setImage('');
            setTitle('');
            setDescription('');
            setPrice('');

        } catch (error) {
            console.error("Erro ao registrar produto:", error);
            alert("Ocorreu um erro ao tentar registrar produto.");
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Criar Produto</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Id de categoria'
                    onChangeText={text => setIdCategory(text)}
                    value={idCategory}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Nome'
                    onChangeText={text => setTitle(text)}
                    value={title}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Imagem'
                    onChangeText={text => setImage(text)}
                    value={image}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Descrição'
                    onChangeText={text => setDescription(text)}
                    value={description}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Preço'
                    onChangeText={text => setPrice(text)}
                    value={price}
                />
            </View>
            <View style={styles.buttons}>
                <Pressable style={styles.button} onPress={handle}>
                    <Text style={styles.buttonText}>Criar</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    },
    input: {
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
        backgroundColor: '#007AFF',
        justifyContent: "center",
        borderRadius: 5,
        alignItems: 'center',
        width: "35%",
        aspectRatio: 2.10
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    }
});

export default App;
