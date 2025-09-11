import { icons } from "@/constants/icons";

import { images } from "@/constants/images";

import { Tabs } from "expo-router";

import { Image, ImageBackground, Text } from "react-native";



export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "hotpink",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: {
                    backgroundColor: "green",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "",
                    headerShown: false,
                    tabBarIcon: ({ size }) => (
                        <ImageBackground
                            source={images.highlight}
                            className="flex flex-row w-1/2 flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
                                >
                                <Image
                                    source={icons.home}
                                    style={{
                                        width: size, // make icon bigger
                                        height: size,
                                        marginRight: 8,
                                    }}
                                    resizeMode="contain"
                                />
                                <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
                                    Home
                                </Text>
                        </ImageBackground>
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{ title: "Profile", headerShown: false }}
            />
            <Tabs.Screen
                name="saved"
                options={{ title: "Saved", headerShown: false }}
            />
            <Tabs.Screen
                name="search"
                options={{ title: "Search", headerShown: false }}
            />
        </Tabs>
    );
}



