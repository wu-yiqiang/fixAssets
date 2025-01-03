import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InformationStackScreen from "@/navigation/stacks/InformationStackScreen";
import TeacherHomeScreen from "@/screens/teacher/HomeScreen";
import SearchStackScreen from "@/navigation/stacks/SearchStackScreen";
import SettingStackScreen from "@/navigation/stacks/SettingStackScreen";
import ChapterStackScreen from "@/navigation/stacks/ChapterStackScreen";
import TabScreen from "@/navigation/TabScreen";

const RootStack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Group>
          <RootStack.Screen name="Tab" component={TabScreen} />
          <RootStack.Screen name="SearchStack" component={SearchStackScreen} />
          <RootStack.Screen
            name="SettingStack"
            component={SettingStackScreen}
          />
          <RootStack.Screen
            name="ChapterStack"
            component={ChapterStackScreen}
          />
        </RootStack.Group>

        <RootStack.Group>
          <RootStack.Screen
            name="InformationStack"
            component={InformationStackScreen}
            options={{
              presentation: "fullScreenModal",
            }}
          />
          <RootStack.Screen
            name="Teacher"
            component={TeacherHomeScreen}
            options={{
              presentation: "modal",
            }}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;
