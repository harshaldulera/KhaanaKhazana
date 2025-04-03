import { Button, StyleSheet, ScrollView } from "react-native";
import { Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import CarouselCards from "@/components/carouselcards";
import ButtonRow from "@/components/buttonrow";
import EventHighlights from "@/components/eventhighlights";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <CarouselCards />
      <ButtonRow />
      <EventHighlights />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
