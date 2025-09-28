import { icons } from "@/constants/icons";
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export type Movie = {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
};

export const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date
}: Movie) => {
  return (
    <Link href={`/movies/${String(id)}`} asChild>
      <TouchableOpacity className="w-full max-w-[140px] rounded-lg overflow-hidden">
        <View className="flex flex-col items-center">
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://placehold.co/600x400/1a1a1a/ffffff.png'
            }}
            className="w-full aspect-[2/3] rounded-lg"
            resizeMode="cover"
          />
          <Text
            className="text-sm font-bold text-white mt-2 text-center px-2"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
          <View className="flex-row items-center justify-center gap-x-1 w-full">
            <Image source={icons.star} style={{ width: 16, height: 16 }} resizeMode="contain" />
            <Text className="font-bold color-white">{Math.round(vote_average / 2)}</Text>
          </View>

          {/* Added View snippet here */}
          <View className="flex-row items-center justify-between w-full">
            <Text className="text-xs text-light-300 font-medium mt-1">
              {release_date?.split('-')[0]}
            </Text>
            <Text className="text-xs text-light-300 font-medium mt-1">
              Movie
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};
