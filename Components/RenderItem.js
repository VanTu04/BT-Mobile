import { StyleSheet, Text, View } from "react-native";

const renderItem = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.header}>{props.header}</Text>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.time}>{props.time}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    display: 'flex',
    backgroundColor: 'rgb(80,46,74)',
    flexDirection: 'column',
    marginTop: 10,
    borderRadius: 20,
  },
  header: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontSize: 10,
  },
  time: {
    color: '#fff',
    fontSize: 8,
    opacity:0.6
  }
})

export default renderItem;