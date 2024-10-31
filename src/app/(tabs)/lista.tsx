import { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { subscribeToProducts } from '../../../types/product';
import { useRouter } from 'expo-router';
import { ListItem } from '../../../components/product-list';
import firebase from 'firebase/compat';

const Listagem = () => {
  const [idCategory, setIdCategory] = useState('');
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState("");
  const [editState, setEditState] = useState("none");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = subscribeToProducts(setProducts);
    return () => unsubscribe();
  }, []);

  const deleteProduct = (id) => {
    Alert.alert(
      "Confirmação",
      "Tem certeza de que deseja excluir este produto?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", onPress: () => firebase.firestore().collection('Products').doc(id).delete() }
      ]
    );
  };

  const updateProduct = (id, dados) => {
    if (!dados.idCategory || !dados.image || !dados.title || !dados.description || isNaN(dados.price)) {
      Alert.alert("Aviso", "Por favor, preencha todos os campos corretamente.");
      return;
    }
  
    firebase.firestore().collection('Products').doc(id).update(dados)
      .then(() => Alert.alert("Sucesso", "Produto atualizado com sucesso!"))
      .catch(error => Alert.alert("Erro", error.message));
    
    closeEdit();
  };

  const showEdit = (id) => {
    const product = products.find((prod) => prod.id === id);
    if (product) {
      setIdCategory(product.idCategory);
      setImage(product.image);
      setTitle(product.title);
      setDescription(product.description);
      setPrice(product.price);
      setEditState("flex");
      setEditId(id);
    }
  };

  const closeEdit = () => {
    setEditState("none");
    setEditId("");
  };

  const renderProduct = ({ item }) => (
    <View style={styles.produto}>
      <ListItem data={item} />
      <View style={styles.acoes}>
        <Pressable onPress={() => showEdit(item.id)}>
          <Image style={styles.edit} source={require('../../../assets/pencil.png')} />
        </Pressable>
        <Pressable onPress={() => deleteProduct(item.id)}>
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
            placeholder="Id da categoria"
            onChangeText={text => setIdCategory(text)}
            value={idCategory}
          />
          <TextInput
            style={styles.input}
            placeholder="URL da imagem"
            onChangeText={text => setImage(text)}
            value={image}
          />
          <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={text => setTitle(text)}
            value={title}
          />
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            onChangeText={text => setDescription(text)}
            value={description}
          />
          <TextInput
            style={styles.input}
            placeholder="Preço"
            keyboardType="numeric"
            onChangeText={text => setPrice(text)}
            value={price.toString()}
          />
        </View>
        <View style={styles.editButtons}>
          <Pressable style={styles.editButton} onPress={closeEdit}>
            <Text style={styles.editButtonText}>Voltar</Text>
          </Pressable>
          <Pressable 
            style={styles.editButton} 
            onPress={() => updateProduct(editId, {
              idCategory, 
              image, 
              title, 
              description, 
              price: parseFloat(price) || 0
            })}
          >
            <Text style={styles.editButtonText}>Editar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {editBox()}
      <Text style={styles.title}>Lista de Produtos</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <Pressable onPress={() => router.push("../productRegister")} style={styles.button}>
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
  produto: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: '#eee',
    padding: 10,
    marginVertical: 5,
    width: '90%',
    height: 70,
    borderRadius: 5,
    alignItems: 'flex-start',
    justifyContent: "space-between"
  },
  variaveis: {
    height: "100%",
    gap: 5,
  },
  acoes: {
    height: "100%",
    gap: 5,
  },
  edit: {
    height: 22,
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
  editButton: {
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
