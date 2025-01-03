import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/user/HomeScreen";

const UserStack = createNativeStackNavigator();

const UserStackScreen = () => {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation, route }) => ({
          title: "我的",
        })}
      />
    </UserStack.Navigator>
  );
};

export default UserStackScreen;
