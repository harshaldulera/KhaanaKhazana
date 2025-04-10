import VolunteerCarousel from "@/components/volunteercarousel";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import robinhoodLogo from "../../assets/images/robinhood.jpg";
import humanaLogo from "../../assets/images/humana.jpg";
import sevaLogo from "../../assets/images/seva.svg";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

interface NgoItem {
  id: string;
  logo: string;
  name: string;
  meals: number;
  collectionTime: string;
}

const ngos = [
  {
    id: "1",
    logo: robinhoodLogo,
    name: "The RobinHood",
    meals: 20,
    collectionTime: "2pm - 6pm",
  },
  {
    id: "2",
    logo: humanaLogo,
    name: "Humana",
    meals: 15,
    collectionTime: "7pm - 12pm",
  },
  {
    id: "3",
    logo: sevaLogo,
    name: "Seva Sahiyog NGO",
    meals: 13,
    collectionTime: "8pm - 10pm",
  },
  {
    id: "4",
    logo: robinhoodLogo,
    name: "The RobinHood",
    meals: 20,
    collectionTime: "2pm - 6pm",
  },
  {
    id: "5",
    logo: humanaLogo,
    name: "Humana",
    meals: 15,
    collectionTime: "7pm - 12pm",
  },
  {
    id: "6",
    logo: sevaLogo,
    name: "Seva Sahiyog NGO",
    meals: 13,
    collectionTime: "8pm - 10pm",
  },
];

const NgoList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNgo, setSelectedNgo] = useState<NgoItem | null>(null);

  const handleSelectNgo = (ngo: NgoItem) => {
    if (ngo.id) {
      router.replace(`/(tabs)/ngodisplay?id=${ngo.id}`);
    }
  };

  const filteredNgos = ngos.filter(ngo => 
    ngo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search NGOs..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <VolunteerCarousel />
      <Text style={styles.title}>Food Required</Text>
      <FlatList
        data={filteredNgos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectNgo(item)}>
            <View style={styles.ngoCard}>
              <View style={styles.ngoDetailsContainer}>
                <Image source={item.logo} style={styles.logo} />
                <View style={styles.ngoTextContainer}>
                  <Text style={styles.ngoName}>{item.name}</Text>
                  <View style={styles.mealsContainer}>
                    <MaterialIcons name="restaurant" size={16} color="#555" />
                    <Text style={styles.ngoMeals}>{item.meals}</Text>
                  </View>
                  <View style={styles.collectionTimeContainer}>
                    <MaterialIcons name="alarm" size={16} color="#555" />
                    <Text style={styles.ngoCollectionTime}>
                      {item.collectionTime}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  ngoCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ngoDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ngoTextContainer: {
    marginLeft: 5,
    flex: 1,
  },
  mealsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
  },
  collectionTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
  },
  ngoMeals: {
    fontSize: 14,
    color: "#555",
  },
  ngoCollectionTime: {
    fontSize: 14,
    color: "#555",
  },
  logo: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  ngoName: {
    fontSize: 16,
    fontWeight: "semibold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
});

export default NgoList;
