import { SectionList, StyleSheet, Text, View } from "react-native";

const SectionListComponent = ({ sections }) => {
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => `${item}-${index}`} // Đảm bảo key là duy nhất
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f4f4f4",
    padding: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default SectionListComponent;
