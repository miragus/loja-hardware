import { data } from "../data";
import firebase from 'firebase/compat';


//pega todos os produtos
export const getAllProducts = () =>{
    return data.products;
}
//pega produtos por id
// productService.ts


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
export const getProductByCategory = (idCategory: number) =>{
    return data.products.filter(item => item.idCategory === idCategory);
}