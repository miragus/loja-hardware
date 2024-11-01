import firebase from "firebase/compat";

export interface Product {
    id: string;
    idCategory: string;
    image: string;
    title: string;
    description: string;
    price: number;
}

export const subscribeToProducts = (callback: (products: Product[]) => void): (() => void) => {
    return firebase.firestore().collection('Products').onSnapshot((snapshot) => {
        const products: Product[] = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Product));
        callback(products);
    });
};
