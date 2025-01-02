import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useTogglePasswordVisibility } from '@/hooks/toggle'
import {login} from '@/api/user'
export default function App() {
  const [account, onChangeAccount] = useState("");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState("");
  const handleLoginOrRegitser = async () => {
    const data = await login();
  };
  return (
    <View style={styles.Login}>
      <View style={styles.card}>
        <Text style={styles.title}>Assets Admin</Text>
        <TextInput
          style={styles.account}
          placeholder="Account"
          onChangeText={onChangeAccount}
          value={account}
        />
        <View style={styles.password}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry={passwordVisibility}
            value={password}
            enablesReturnKeyAutomatically
            onChangeText={(text) => setPassword(text)}
          />
          <Pressable onPress={handlePasswordVisibility}>
            <MaterialCommunityIcons
              name={rightIcon}
              size={22}
              color="#232323"
            />
          </Pressable>
        </View>
        <Button title="Login/Register" onPress={handleLoginOrRegitser} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Login: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#f3f3f3",
    borderRadius: 4,
    padding: 20,
    paddingBottom: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
  },
  account: {
    margin: 12,
    paddingLeft: 10,
    paddingRight: 6,
    borderWidth: 1,
    borderRadius: 4,
  },
  password: {
    margin: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 6,
  },
  passwordInput: {
    height: 40,
    flex: 1,
  },
});
