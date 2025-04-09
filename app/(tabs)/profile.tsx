import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarPlaceholder} />
        <Text style={styles.name}>Sujal Jain</Text>
        <Text style={styles.email}>suja16@somaiya.edu</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.iconTextContainer}>
          <AntDesign name="clockcircleo" size={24} color={Colors.light.icon} />
          <Text style={styles.sectionTitle}>Donation History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconTextContainer}>
          <AntDesign name="calendar" size={24} color={Colors.light.icon} />
          <Text style={styles.sectionTitle}>Schedule Donation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconTextContainer}>
          <AntDesign name="infocirlceo" size={24} color={Colors.light.icon} />
          <Text style={styles.sectionTitle}>Help & FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconTextContainer}>
          <AntDesign name="setting" size={24} color={Colors.light.icon} />
          <Text style={styles.sectionTitle}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  profileHeader: {
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.light.icon,
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center", 
    paddingVertical: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light.text,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.light.text,
    marginLeft: 10,
  },
  email: {
    fontSize: 16,
    color: Colors.light.icon,
  },
  section: {
    padding: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: Colors.light.tint,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
  },
});
