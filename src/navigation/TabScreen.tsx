import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabOption from "@/navigation/options/TabOption";
import Colors from "@/constants/Colors";
import DiscoverStackScreen from "@/navigation/stacks/DiscoverStackScreen";
import VideoStackScreen from "@/navigation/stacks/VideoStackScreen";
import UserStackScreen from "@/navigation/stacks/UserStackScreen";

const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        ...TabOption(route),
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.tabBarInactiveText,
      })}
    >
      <Tab.Screen name="DiscoverStack" component={DiscoverStackScreen} />
      <Tab.Screen name="VideoStack" component={VideoStackScreen} />
      <Tab.Screen name="UserStack" component={UserStackScreen} />
    </Tab.Navigator>
  );
}

export default TabScreen;
