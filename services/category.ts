import { data } from "../data";

//retorna uma categoria pelo ID.
export const getCategoryById = (id:number) => {
    return data.categories.find(item => item.id === id);
}

//retorna todas as categorias.
export const getAllCategories = () =>{
    return data.categories;
}