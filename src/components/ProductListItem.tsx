import { Image, Pressable, Text, View } from "react-native";
import { Product } from "../types";
import { Link } from "expo-router";

type ProductListItemProps = {
  product: Product;
};

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable className="bg-white p-2 rounded-xl flex-1 max-w-[50%]">
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          className="w-full aspect-[1]"
          resizeMode="contain"
        />
        <Text className="text-[18px] font-[600] my-2">{product.name}</Text>
        <Text className="text-[#2f95dc] font-bold">${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;
