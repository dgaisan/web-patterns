import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { SignIn } from "./screens/Signin";
import { Feed } from "./screens/Feed";
import { Profile } from "./screens/Profile";
import { SavedPosts } from "./screens/SavedPosts";
import { AddPost } from "./screens/AddPost";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Feed") {
            iconName = focused ? "md-home" : "md-home-outline";
          } else if (route.name === "AddPost") {
            iconName = focused ? "md-mail" : "md-mail-outline";
          } else if (route.name === "Saved") {
            iconName = focused ? "md-heart" : "md-heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else {
            // Add icons for new menu options
            iconName = focused ? "md-close" : "md-close-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        headerTransparent: false, 
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="AddPost" component={AddPost} />
      <Tab.Screen name="Saved" component={SavedPosts} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  return (

    <NavigationContainer>
      <Stack.Navigator>
        {!userLoggedIn ? (
          <Stack.Screen name="SignIn" component={SignIn} />
        ) : (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
