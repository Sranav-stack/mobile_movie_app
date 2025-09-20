import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type Movie = {
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
    <Link href={`/movie/${String(id)}`} asChild>
      <TouchableOpacity className="w-full max-w-[140px] bg-yellow-300 rounded-lg overflow-hidden">
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
          <Text className="text-sm font-bold text-white mt-2 text-center px-2" numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};
