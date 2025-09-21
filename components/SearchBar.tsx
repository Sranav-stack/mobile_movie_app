import { Search } from "lucide-react-native"; // ✅ Import Search icon
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

interface Props {
    placeholder: string;
    onPress?: () => void;
    value: string;
    onChangeText?: (text: string) => void;
}

export const SearchBar = ({placeholder,onPress,value,onChangeText}:Props) => {
  const [query,setQuery] = useState("")
  return (
    <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
      <TouchableOpacity className="ml-2" onPress={onPress}>
        <Search size={20} color="#6B7280" />
        
      
        <TextInput
          className="flex-1 ml-2 text-base text-gray-800"
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor="#9CA3AF"
        />
      </TouchableOpacity>
      

    </View>
  );
};


