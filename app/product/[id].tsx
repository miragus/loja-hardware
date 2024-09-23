import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View, Image,Text} from "react-native";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { Button } from "../../components/button";
import { getProductById } from "../../services/product";


export default function Screen() {
    const { id } = useLocalSearchParams();
    const idProduct = parseInt(id as string)

    const product = getProductById(idProduct);
    if (!product) return router.back;


    const comprar = () => {
        alert("você clicou no item " + product.title);

    }

    return (
        <SafeAreaView style={styles.container} >
            <Stack.Screen options={{ title: '' }} />
            <ScrollView style={styles.area}>
              <Image
               style={styles.img}
               source={{uri: product.image}}
               resizeMode="cover"

              
              />
              <Text style={styles.title}> {product.title}</Text>
              <Text  style= {styles.description}> {product.description}</Text>
              <View style= {styles.priceArea}>
                <Text style= {styles.price} > R$ {product.price.toFixed(2)}

                </Text>
                </View>
       
              
            </ScrollView>
            <View style={styles.ButtonArea}
            >
                <Button
                    title="comprar agora"
                    onPress={comprar}
                   
                />
                 <Text style= {styles.price}>{product.price.toFixed(2)}</Text>
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    area: {
        flex: 1,
        padding: 10,

    },
    ButtonArea: {
        padding: 10,
    },
    img:{
        width: "100%",
        height:250,
        borderRadius: 10, 
        marginBottom:20
    },
   title:{
    fontSize:29,
    fontWeight: 'bold',
    marginBottom:10
   },
   description:{
    fontSize: 15 ,
    marginBottom:20,
    color: '#555555'
   },

   priceArea:{
    padding:10,
    borderRadius: 10,
    backgroundColor:'#cccccc'
   },
   price:{
fontSize: 22, 
textAlign:'center'
    

   }
});

