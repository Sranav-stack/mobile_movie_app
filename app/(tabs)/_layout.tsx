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

                title: "Veedu",

                headerShown: false,

                tabBarIcon: ({ size }) => (

                <ImageBackground

                    source={images.highlight}

                    style={{

                    width: size * 2, // increase length

                    height: size,

                    flexDirection: "row",

                    alignItems: "center",

                    justifyContent: "center",

// curved edges
overflow: "hidden",
}}

resizeMode="cover"
>
    <Image
        source={icons.home}
        style={{
            width: size * 0.6,
            height: size * 0.6,
            marginRight: 8,
        }}
    />
    <Text style={{ fontSize: 14, color: "white", fontWeight: "bold" }}>
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



