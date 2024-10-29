import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

export default function RootLayout() {
    return (
            <Stack screenOptions={{ headerShown: false, headerTitleAlign: "center" }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="product/[id]" options={{ headerShown: true }} />
            </Stack>

    );
}