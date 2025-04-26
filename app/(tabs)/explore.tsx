import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { Colors } from "@/constants/Colors";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ShareBite </Text>
      <Text style={styles.subtitle}>Your new Journey Begins Here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light.text,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.icon,
  },
});
