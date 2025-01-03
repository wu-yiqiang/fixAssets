import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/search/HomeScreen";
import ResultsScreen from "@/screens/search/ResultsScreen";

const SearchStack = createNativeStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Home" component={HomeScreen} />
      <SearchStack.Screen name="Results" component={ResultsScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
