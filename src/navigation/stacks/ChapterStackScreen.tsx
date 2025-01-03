import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChaptersScreen from "@/screens/video/ChaptersScreen";
import CardOption from "@/navigation/options/CardOption";
const ChapterStack = createNativeStackNavigator();

const ChapterStackScreen = () => {
  return (
    <ChapterStack.Navigator
      screenOptions={({ route, navigation }) => ({
        ...CardOption(route, navigation),
      })}
    >
      <ChapterStack.Screen name="Chapters" component={ChaptersScreen} />
    </ChapterStack.Navigator>
  );
};

export default ChapterStackScreen;
