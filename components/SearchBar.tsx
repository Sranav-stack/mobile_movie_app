import { Search } from "lucide-react-native"; // ✅ Import Search icon
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

interface Props {
    placeholder:string;
    onPress?:()=>void;
}

export const SearchBar = ({placeholder,onPress}:Props) => {
  return (
    <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
      <TouchableOpacity className="ml-2">
        <Search size={20} color="#6B7280" />
      </TouchableOpacity>
      
      <TextInput
        className="flex-1 ml-2 text-base text-gray-800"
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={()=>{}}
        editable={false}
        placeholderTextColor="#9CA3AF"
      />
      

    </View>
  );
};


