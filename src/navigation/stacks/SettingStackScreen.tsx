import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/setting/HomeScreen";
import DetailsScreen from "@/screens/setting/DetailsScreen";

const SettingStack = createNativeStackNavigator();

const SettingStackScreen = () => {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Home" component={HomeScreen} />
      <SettingStack.Screen name="Details" component={DetailsScreen} />
    </SettingStack.Navigator>
  );
};

export default SettingStackScreen;
