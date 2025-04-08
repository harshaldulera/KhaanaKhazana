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
  ScrollView
} from "react-native";
import robinhoodLogo from "../../assets/images/robinhood.jpg";
import humanaLogo from "../../assets/images/humana.jpg";
import sevaLogo from "../../assets/images/seva.svg";

interface NgoItem {
  id: string;
  logo: string;
  name: string;
}

const ngos = [
  {
    id: "1",
    logo: robinhoodLogo,
    name: "The RobinHood",
  },
  {
    id: "2",
    logo: humanaLogo,
    name: "Humana",
  },
  {
    id: "3",
    logo: sevaLogo,
    name: "Seva Sahiyog NGO",
  },
  {
    id: "4",
    logo: robinhoodLogo,
    name: "The RobinHood",
  },
  {
    id: "5",
    logo: humanaLogo,
    name: "Humana",
  },
  {
    id: "6",
    logo: sevaLogo,
    name: "Seva Sahiyog NGO",
  },
  {
    id: "1",
    logo: robinhoodLogo,
    name: "The RobinHood",
  },
  {
    id: "2",
    logo: humanaLogo,
    name: "Humana",
  },
  {
    id: "3",
    logo: sevaLogo,
    name: "Seva Sahiyog NGO",
  },
  {
    id: "4",
    logo: robinhoodLogo,
    name: "The RobinHood",
  },
  {
    id: "5",
    logo: humanaLogo,
    name: "Humana",
  },
  {
    id: "6",
    logo: sevaLogo,
    name: "Seva Sahiyog NGO",
  },
];

const NgoList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNgo, setSelectedNgo] = useState<NgoItem | null>(null);

  const handleSelectNgo = ( ngo: NgoItem ) => {
    setSelectedNgo(ngo);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search NGOs..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <VolunteerCarousel />
      {ngos.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => handleSelectNgo(item)}>
          <View style={styles.ngoItem}>
            <Image source={item.logo} style={styles.logo} />
            <Text style={styles.ngoName}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  ngoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 40, 
    height: 40, 
    marginRight: 10,
  },
  ngoName: {
    fontSize: 16,
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
