import { FlatList, SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';
import RenderItem from './Components/RenderItem';
import SectionListComponent from './Components/SectionListComponent';

export default function App() {
  const dataFlatList = [
    {id: "1", header: "Bạn có khách hàng mới!", title: "Chúc mừng bạn, bạn có khách hàng mới.Hãy mau chóng liên lạc.", time: "20/08/2020, 09:20"},
    {id: "2", header: "Bạn có khách hàng mới!", title: "Chúc mừng bạn, bạn có khách hàng mới.Hãy mau chóng liên lạc.", time: "20/08/2020, 09:20"},
    {id: "3", header: "Bạn có khách hàng mới!", title: "Chúc mừng bạn, bạn có khách hàng mới.Hãy mau chóng liên lạc.", time: "20/08/2020, 09:20"},
    {id: "4", header: "Bạn có khách hàng mới!", title: "Chúc mừng bạn, bạn có khách hàng mới.Hãy mau chóng liên lạc.", time: "20/08/2020, 09:20"},
    {id: "5", header: "Bạn có khách hàng mới!", title: "Chúc mừng bạn, bạn có khách hàng mới.Hãy mau chóng liên lạc.", time: "20/08/2020, 09:20"},
  ]

  const dataSectionList = [
    { title: 'Category A', data: ['Product A1', 'Product A2', 'Product A3'] },
    { title: 'Category B', data: ['Product B1', 'Product B2'] },
    { title: 'Category C', data: ['Product C1', 'Product C2', 'Product C3'] },
  ]
  return (
    <SafeAreaView style={styles.container}>
      {/* <Square title="Hello, world" /> */}
      <Text>Flat List</Text>
      <FlatList 
        data={dataFlatList}
        renderItem={
          ({item}) => <RenderItem header={item.header} title={item.title} time={item.time} />
        }
        keyExtractor={(item) => item.id}
      />

      <Text style={styles.headerSectionList}>Section List</Text>
      <SectionListComponent sections={dataSectionList}/>
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
  headerSectionList: {
    marginTop: 30,
  }
});
