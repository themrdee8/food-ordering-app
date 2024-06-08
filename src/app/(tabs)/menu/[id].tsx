import { Image, Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "@/assets/data/products";
import Button from "@/src/components/Button";
import { useCart } from "@/src/provider/CartProvider";
import { PizzaSize } from "@/src/types";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const { addItems } = useCart();

  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    if (!product) return;

    addItems(product, selectedSize);
    router.push("/cart");
  };

  if (!product) {
    return <Text>No product found</Text>;
  }

  return (
    <View className="bg-white flex-1 p-3">
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        className="w-full aspect-[1]"
      />
      <Text>Select size</Text>
      <View className="flex-row items-center justify-around my-2" key={product.id}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelectedSize(size);
            }}
            className={`${
              selectedSize === size ? "bg-[#dcdcdc]" : "bg-white"
            } w-12 aspect-[1] rounded-full items-center justify-center`}
          >
            <Text
              className={`${
                selectedSize === size ? "text-black" : "text-gray-500"
              } text-lg font-semibold`}
              key={size}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text className="text-xl font-bold mt-auto">${product.price}</Text>
      <Button onPress={addToCart} text="Add to cart" />
    </View>
  );
};

export default ProductDetailsScreen;
