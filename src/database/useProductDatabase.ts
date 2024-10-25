import { useSQLiteContext } from "expo-sqlite"

export type ProductDatabase = {
    id: number
    idCategory: number
    image: string
    title: string
    description: string
    price: number
}
export function useProductDatabase() {
    const database = useSQLiteContext()

    async function create(data: ProductDatabase) {

        const statement = await database.prepareAsync(
            "INSERT INTO products (id, idCategory, image, title, description, price) VALUES($id, $idCategory, $image, $title, $description, $price)"
        )
        try {
            const result = await statement.executeAsync({
                $id: data.id,
                $idCategory: data.idCategory,
                $image: data.image,
                $title: data.title,
                $description: data.description,
                $price: data.price
            })

            const insertedRowId = result.lastInsertRowId.toString()

            return { insertedRowId }
        } catch (error) {
            throw error
        } finally {
            await statement.finalizeAsync( )
        }

    }

    async function searchByName(title: string) {
       try {
        const query = "SELECT * FROM products WHERE title LIKE ?"

        const response = await database.getAllAsync<ProductDatabase>(query, `%${title}%`)

        return response
       } catch (error) {
        throw error
       } 
    }

    return { create ,searchByName }
}