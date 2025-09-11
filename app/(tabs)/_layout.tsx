import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, ImageBackground, ImageSourcePropType, Text } from "react-native";

type TabIconProps = {
  size: number;
  label: string;
  icon: ImageSourcePropType;
};

const TabIcon = ({ size, label, icon }: TabIconProps) => {
  return (
    <ImageBackground
      source={images.highlight}
      className="flex flex-row w-1/2 flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
    >
      <Image
        source={icon}
        style={{
          width: size * 1.3, // slightly bigger
          height: size * 1.3,
          marginRight: 8,
        }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
        {label}
      </Text>
    </ImageBackground>
  );
};

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
            <TabIcon size={size} label="Home" icon={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <TabIcon size={size} label="Profile" icon={icons.person} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <TabIcon size={size} label="Saved" icon={icons.save} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <TabIcon size={size} label="Search" icon={icons.search} />
          ),
        }}
      />
    </Tabs>
  );
}

