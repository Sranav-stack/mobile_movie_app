import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image 
        source={images.bg} 
        className="absolute w-1/2 h-full z-0" 
      />

      <ScrollView className="flex-1 px-5">
        <Image 
          source={icons.logo} 
          style={{ width: 50, height: 50 }}
          className="mt-20 mb-5 mx-auto" 
        />
      </ScrollView>
    </View>
  );
}




