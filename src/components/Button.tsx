import { Pressable, Text, View } from "react-native";
import { forwardRef } from "react";

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    return (
      <Pressable
        ref={ref}
        {...pressableProps}
        className="bg-[#2f95dc] p-4 items-center rounded-full my-2"
      >
        <Text className="text-base text-white font-bold">{text}</Text>
      </Pressable>
    );
  }
);

export default Button;
