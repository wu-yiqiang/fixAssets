import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/discover/HomeScreen";
import CoursesScreen from "@/screens/video/CoursesScreen";

const DiscoverStack = createNativeStackNavigator();

const DiscoverStackScreen = () => {
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation, route }) => ({
          title: "发现",
        })}
      />
      <DiscoverStack.Screen name="Courses" component={CoursesScreen} />
    </DiscoverStack.Navigator>
  );
};

export default DiscoverStackScreen;
