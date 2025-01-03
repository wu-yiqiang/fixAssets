import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/information/HomeScreen";
import ArticlesScreen from "@/screens/information/ArticlesScreen";

const InformationStack = createNativeStackNavigator();

const InformationStackScreen = () => {
  return (
    <InformationStack.Navigator>
      <InformationStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "新闻" }}
      />
      <InformationStack.Screen name="Articles" component={ArticlesScreen} />
    </InformationStack.Navigator>
  );
};

export default InformationStackScreen;
