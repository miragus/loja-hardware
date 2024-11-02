import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitleStyle: { color: '#AAFFAA' },
                headerStyle: { backgroundColor: '#222222' },
                headerTintColor: '#FFFFFF',
                tabBarStyle: { backgroundColor: '#222222' },
                tabBarInactiveTintColor: "#AAFFAA"
            }}>

            <Tabs.Screen
                name="home"
                options={{
                    title: 'Início',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
                }}
            />
            <Tabs.Screen
                name="categories"
                options={{
                    title: 'Categorias',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="archive" color={color} />
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Sobre mim',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />
                }}
            />
            <Tabs.Screen
                name="log"
                options={{
                    title: 'Login',
                    tabBarIcon: ({ color }) => <FontAwesome name="sign-in" size={24} color={color}/>
                }}
            />
            <Tabs.Screen
                name="productRegister"
                options={{
                    title: 'Registro',
                    tabBarIcon: ({ color }) => <FontAwesome name="upload" size={24} color={color} />
                }}
            />
        </Tabs>
    );
}