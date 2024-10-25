import { Stack } from "expo-router";

export default function CategoryLayout() {
    return (
        <Stack>

            <Stack.Screen name="list" options={
                {
                    title: 'Categorias',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#222222' },
                    headerTitleStyle: { color: '#CCFFCC' },
                }} />
            <Stack.Screen name="[id]" />
        </Stack>
    );
}