import { Button, Text, View } from "react-native";
const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24 }}>发现的首页</Text>

      <Button
        title="跳转到视频课程页"
        onPress={() => navigation.navigate("Courses")}
      />
    </View>
  );
};

export default HomeScreen;
