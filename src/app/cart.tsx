import { View, Text, Platform, FlatList } from "react-native";
import React, { useContext } from "react";
import { useCart } from "../provider/CartProvider";
import { StatusBar } from "expo-status-bar";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";

const CartScreen = () => {
  const { items, total } = useCart();
  return (
    <View className="p-2">
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />

      <Text className="mt-2 text-lg font-semibold">Total: ${total.toFixed(2)}</Text>
      <Button text="Checkout" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
