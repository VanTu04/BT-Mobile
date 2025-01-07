import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Square from './Components/Square';
import RenderItem from './Components/RenderItem';

export default function App() {
  const data = [
    {id: "1", header: "Bạn có khách hàng mới!", title: "Chúc mừng bạn, bạn có khách hàng mới.Hãy mau chóng liên lạc.", time: "20/08/2020, 09:20"},
    {id: "2", header: "Bạn có khách hàng mới!", title: "Chúc mừng bạn, bạn có khách hàng mới.Hãy mau chóng liên lạc.", time: "20/08/2020, 09:20"},
    {id: "3", header: "Bạn có khách hàng mới!", title: "Chúc mừng bạn, bạn có khách hàng mới.Hãy mau chóng liên lạc.", time: "20/08/2020, 09:20"},
    {id: "4", header: "Bạn có khách hàng mới!", title: "Chúc mừng bạn, bạn có khách hàng mới.Hãy mau chóng liên lạc.", time: "20/08/2020, 09:20"},
    {id: "5", header: "Bạn có khách hàng mới!", title: "Chúc mừng bạn, bạn có khách hàng mới.Hãy mau chóng liên lạc.", time: "20/08/2020, 09:20"},
  ]
  return (
    <SafeAreaView style={styles.container}>
      {/* <Square title="Hello, world" /> */}
      <FlatList 
        data={data}
        renderItem={
          ({item}) => <RenderItem header={item.header} title={item.title} time={item.time} />
        }
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(181,238,191)',
    justifyContent: 'center',
  },
});
