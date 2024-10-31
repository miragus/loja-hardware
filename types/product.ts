import firebase from "firebase/compat";

export const subscribeToProducts = (callback) => {
    return firebase.firestore().collection('Products').onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        callback(products);
    });
};


export type Product = {
    id: number;
    idCategory: number;
    image: string;
    title: string;
    description: string;
    price: number;
}