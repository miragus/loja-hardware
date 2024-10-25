import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { initializeDatabase } from "../database/initializeDatabase";

export default function RootLayout() {
    return (
        <SQLiteProvider databaseName="hardcore.db" onInit={initializeDatabase}>
            <Stack screenOptions={{ headerShown: false, headerTitleAlign: "center" }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="product/[id]" options={{ headerShown: true }} />
            </Stack>
        </SQLiteProvider>

    );
}