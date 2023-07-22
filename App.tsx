import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, ScrollView,Image } from 'react-native';
import LiveMatches from './src/components/LiveMatches';
import UpcomingMatches from './src/components/UpcomingMatches';
import MyTabs from './src/components/Tabs';
import { NavigationContainer } from '@react-navigation/native';

const App1 = ()=>{
  return <Text>App 1 is loading</Text>
}
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {/* <View>
           <Image resizeMode="stretch" source={require('./assets/cricscore-logo3.png')}/> 
        </View> */}
        <MyTabs />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40e0d0',
    //alignItems: 'center',
    //justifyContent: 'center',
    //margin:10,
    paddingTop:40
  },
});
