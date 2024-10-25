import { Pressable, PressableProps, Text } from "react-native";

type Props = PressableProps & {
    data: {
        id: number
        idCategory: number
        image: string
        title: string
        description: string
        price: number
    }
}

export function Product({ data, ...rest }: Props) {
    return (
        <Pressable style={
            {
                backgroundColor: "#CECECE",
                padding: 24,
                borderRadius: 5,
                gap: 12,
                flexDirection: 'column'


            }} {...rest}>
            <Text>
                {data.id} - {data.idCategory} - {data.image} - {data.title} - {data.description} - {data.price}
            </Text>
        </Pressable>
    )
}