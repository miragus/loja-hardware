import { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import firebase from '../../../firebase';
import { useRouter } from 'expo-router';
import { ProductItem } from '../../../components/product-item';

const Listagem = () => {
    const [idCategory, setIdCategory] = useState('');
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0); // Alterado para 0
    const [products, setProducts] = useState([]);
    const [editId, setEditId] = useState("");
    let [editState, setEditState] = useState("none");
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection('Products').onSnapshot((snapshot) => {
            const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setProducts(data);
        });
        return () => unsubscribe();
    }, []);

    const excluirProduto = (id) => {
        Alert.alert(
            "Confirmação",
            "Tem certeza de que deseja excluir este produto?",
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Excluir", onPress: () => firebase.firestore().collection('Products').doc(id).delete() }
            ]
        );
    };

    const atualizarProduto = (id, dados) => {
        if (!dados.idCategory || !dados.image || !dados.title || !dados.description || isNaN(dados.price)) {
            // Exibir um aviso ou retornar
            return;
        }
        firebase.firestore().collection('Products').doc(id).update(dados);
        closeEdit();
    };

    const showEdit = (id) => {
        setEditState("flex");
        setEditId(id);
    };

    const closeEdit = () => {
        setEditState("none");
        setEditId("");
    };

    const renderProduto = ({ item }) => (
        <View style={styles.Produto}>
            <ProductItem data={item} />
            <View style={styles.acoes}>
                <Pressable onPress={() => showEdit(item.id)}>
                    <Image style={styles.edit} source={require('../../../assets/pencil.png')} />
                </Pressable>
                <Pressable onPress={() => excluirProduto(item.id)}>
                    <Image style={styles.trash} source={require('../../../assets/trash.png')} />
                </Pressable>
            </View>
        </View>
    );

    const editBox = () => (
        <View style={[styles.editContainer, { display: editState }]}>
            <View style={styles.editBox}>
                <View style={styles.editTitle}>
                    <Text style={styles.titletext}>Editar</Text>
                </View>
                <View style={styles.editform}>
                    <TextInput
                        style={styles.input}
                        placeholder='Id da categoria'
                        onChangeText={text => setIdCategory(text)}
                        value={idCategory}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='URL da imagem'
                        onChangeText={text => setImage(text)}
                        value={image}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Nome'
                        onChangeText={text => setTitle(text)}
                        value={title}
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
                        onChangeText={text => setPrice(parseFloat(text))} // Convertendo para número
                        value={price.toString()} // Convertendo para string para exibição
                    />
                </View>
                <View style={styles.editButtons}>
                    <Pressable style={styles.editButton} onPress={closeEdit}>
                        <Text style={styles.editButtonText}>Voltar</Text>
                    </Pressable>
                    <Pressable style={styles.editButton} onPress={() => atualizarProduto(editId, { idCategory, image, title, description, price })}>
                        <Text style={styles.editButtonText}>Editar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {editBox()}
            <Text style={styles.title}>Lista de Usuários</Text>
            <FlatList
                data={products}
                renderItem={renderProduto} // Usando a função definida
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.list}
            />
            <Pressable onPress={() => router.push("/")} style={styles.button}>
                <Text style={styles.buttonText}>Voltar</Text>
            </Pressable>
        </View>
    );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    height: "100%",
    paddingBottom: 25,
    gap: 45
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  Produto: {
    display:"flex",
    flexDirection: "row",
    backgroundColor: '#eee',
    padding: 10,
    marginVertical: 5,
    width: '90%',
    borderRadius: 5,
    alignItems: 'flex-start',
    aspectRatio: 5,
    justifyContent: "space-between"
  },
  variaveis: {
    height: "100%",
    gap: 5,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cpf: {
    fontSize: 16,
  },
  acoes: {
    height: "100%",
    gap: 5,
  },
  edit: {
    height: 20,
    width: 20,

  },
  trash: {
    height: 25,
    width: 25,
    backgroundColor: '#e7131357',
    borderRadius: 5
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  editContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1
  },
  editBox: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: "80%",
    aspectRatio: 1,
    elevation: 5,
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 15
  },
  buttons: {
    width: '65%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButtons: {
    width: '65%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton:{
    backgroundColor: '#007AFF',
    justifyContent: "center",
    borderRadius: 5,
    alignItems: 'center',
    width: "35%",
    aspectRatio: 2.10
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  titletext: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    paddingHorizontal: 12,
    width: '65%',
    height: 30,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  editform: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
});

export default Listagem;