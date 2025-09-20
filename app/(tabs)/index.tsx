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
            <SearchBar onPress={() => router.push("/search")} placeholder="Search for a movie" />
            <Text className="mt-5 text-white text-lg font-bold">Latest Movies</Text>
            <FlatList
              data={movies ?? []}
              renderItem={({ item }) => (
                <View className="flex-1 m-2 bg-pink-400">
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
                backgroundColor: '#222831',                
              }}
              scrollEnabled={false}
            />
          </View>
        )}

        {/* Temporary placeholder movie list */}
        {Array.from({ length: 20 }).map((_, i) => (
          <View key={i} className="h-20 bg-white my-2 rounded-xl" />
        ))}
      </ScrollView>
    </View>
  );
}
