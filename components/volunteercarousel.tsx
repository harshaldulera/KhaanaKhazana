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

const { width: screenWidth } = Dimensions.get("window");

interface NgoItem {
  id: string;
  logo: string;
  name: string;
}

const ngoData: NgoItem[] = [
  {
    id: "1",
    logo: "",
    name: "The RobinHood",
  },
  {
    id: "2",
    logo: "",
    name: "humana",
  },
];

const VolunteerCarousel = () => {
  const renderItem = ({ item }: { item: NgoItem }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.logo }} style={styles.image} />
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
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  name: {
    marginTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
});

export default VolunteerCarousel;
