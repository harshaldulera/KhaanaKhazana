import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import sevaLogo from "../../assets/images/seva.svg";
import { Colors } from "@/constants/Colors";

interface NgoDisplay {
  name: string;
  logo: string;
  reviews: string;
  totalFeeds: string;
  totalCampaigns: string;
  totalVolunteers: string;
}

const sampleData: NgoDisplay = {
  name: "Helping Hands",
  logo: sevaLogo,
  reviews: "4.3",
  totalFeeds: "800+",
  totalCampaigns: "455+",
  totalVolunteers: "80+",
};

const ngoDisplay = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={sampleData.logo}
          style={styles.profilePicture}
        />
        <Text style={styles.ngoName}>{sampleData.name}</Text>
      </View>

      <View style={styles.dataContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Reviews</Text>
          <Text style={styles.cardValue}>{sampleData.reviews}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Feeds</Text>
          <Text style={styles.cardValue}>{sampleData.totalFeeds}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Campaigns</Text>
          <Text style={styles.cardValue}>{sampleData.totalCampaigns}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Volunteers</Text>
          <Text style={styles.cardValue}>{sampleData.totalVolunteers}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.donateButton}>
        <Text style={styles.buttonText}>Donate Now</Text>
      </TouchableOpacity>

      {/* Tabs Section */}
      <View style={styles.tabsContainer}>
        <Text style={styles.tab}>About</Text>
        <Text style={styles.tab}>Events</Text>
        {/* <Text style={styles.tab}>Reviews</Text> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  ngoName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  dataContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  box: {
    width: "48%",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  card: {
    width: "48%",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardValue: {
    fontSize: 14,
    marginTop: 5,
  },
  donateButton: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tab: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ngoDisplay;
