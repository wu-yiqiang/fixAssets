import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/video/HomeScreen";
import CoursesScreen from "@/screens/video/CoursesScreen";

const VideoStack = createNativeStackNavigator();

const VideoStackScreen = () => {
  return (
    <VideoStack.Navigator>
      <VideoStack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation, route }) => ({
          title: "视频",
        })}
      />
      <VideoStack.Screen name="Courses" component={CoursesScreen} />
    </VideoStack.Navigator>
  );
};

export default VideoStackScreen;
