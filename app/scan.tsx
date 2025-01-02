import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Scan() {
  return (
    <View style={styles.Scan}>
      <Text>Scanner</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Scan: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
