import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChaptersScreen from "@/screens/video/ChaptersScreen";

const ChapterStack = createNativeStackNavigator();

const ChapterStackScreen = () => {
  return (
    <ChapterStack.Navigator>
      <ChapterStack.Screen name="Chapters" component={ChaptersScreen} />
    </ChapterStack.Navigator>
  );
};

export default ChapterStackScreen;
