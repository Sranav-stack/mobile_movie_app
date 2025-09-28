import { MovieCard } from "@/components/MovieCard";
import { SearchBar } from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchPopularMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  console.log('database',process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID);
  console.log('collection',process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID);
  const { data: movies, loading: moviesLoading, error: moviesError } = useFetch(() =>
    fetchPopularMovies({ query: "" })
  );

  return (
    <View className="flex-1 bg-primary">
      <Image 
        source={images.bg} 
        className="absolute w-1/2 h-full z-0" 
      />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
      >
        {/* Logo */}
        <Image 
          source={icons.logo} 
          style={{ width: 50, height: 50 }}
          className="mt-5 mb-5 mx-auto" 
        />

        {/* Conditional rendering */}
        {moviesLoading ? (
          <ActivityIndicator 
            size="large" 
            color="#0000ff" 
            className="mt-10 self-center" 
          />
        ) : moviesError ? (
          <Text className="text-red-500 mt-5">Error: {moviesError.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              value=""
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
            />
            <Text className="mt-5 text-white text-lg font-bold">Latest Movies</Text>
            <FlatList
              data={movies ?? []}
              renderItem={({ item }) => (
                <View className="flex-1 m-2">
                  <MovieCard
                     {...item}
                  />
                </View>
              )}
              numColumns={3}
              keyExtractor={(item) => item.id.toString()}
              columnWrapperStyle={{
                justifyContent: 'flex-start',
                gap: 20,
                paddingRight: 5,
                marginBottom: 10,                
              }}
              scrollEnabled={false}
            />
          </View>
        )}

      </ScrollView>
    </View>
  );
}
