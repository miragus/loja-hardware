import { Link } from "expo-router";
import { Product } from "../types/product";
import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { useState } from "react";

interface ProductItemProps {
  data: Product;
}

export const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
  const [imageUri, setImageUri] = useState<string>(data.image);

  return (
    <Link href={`/product/${data.id}`} asChild>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          { opacity: pressed ? 0.9 : 1 },
        ]}
      >
        <View style={{ padding: 20 }}>
          <Image
            style={styles.img}
            source={{ uri: imageUri }}
            resizeMode="cover"
            onError={() => setImageUri(require("../assets/erro.jpg"))}
          />
          <View style={styles.info}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
              {data.description}
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 12,
    backgroundColor: "#AAAAAA",
  },
  info: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#FFFFFF",
  },
  description: {
    fontSize: 14,
    color: "#DDDDDD",
    marginBottom: 10,
  },
  priceContainer: {
    backgroundColor: "#1E1E1E",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#A8FFB2",
  },
});
