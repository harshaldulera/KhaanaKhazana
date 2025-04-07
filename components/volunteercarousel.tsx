import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import robinhoodLogo from "../assets/images/robinhood.jpg";
import humanaLogo from "../assets/images/humana.jpg"; 
import sevaLogo from "../assets/images/seva.svg";

const { width: screenWidth } = Dimensions.get("window");

interface NgoItem {
  id: string;
  logo: string;
  name: string;
}

const ngoData: NgoItem[] = [
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

const VolunteerCarousel = () => {
  const renderItem = ({ item }: { item: NgoItem }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.logo} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Volunteers Required</Text>
      <FlatList
        data={ngoData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={screenWidth * 0.8}
        decelerationRate="fast"
        contentContainerStyle={styles.carousel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  carousel: {
    paddingBottom: 5,
  },
  card: {
    width: screenWidth * 0.6,
    alignItems: "center",
    marginHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
});

export default VolunteerCarousel;
