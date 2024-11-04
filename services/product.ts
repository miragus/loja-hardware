import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

//pega produtos por id
export const fetchProductById = async (id: string) => {
    const productRef = firebase.firestore().collection('Products').doc(id); // Supondo que os produtos estejam em uma coleção chamada 'products'
    const doc = await productRef.get();
    if (doc.exists) {
        return { id: doc.id, ...doc.data() }; // Retorna os dados do produto
    } else {
        throw new Error('Produto não encontrado');
    }
};

//pega produtos por categoria
export const getProductByCategory = async (idCategory: number) => {
    const snapshot = await firebase.firestore()
        .collection('Products')
        .where('idCategory', '==', idCategory)
        .get();


        
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};
//retorna todos os produtos
export const fetchAllProducts = async () => {
    const snapshot = await firebase.firestore().collection('Products').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

