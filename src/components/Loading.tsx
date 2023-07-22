import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loading = () => (
  <View style={styles.container}>
   <ActivityIndicator size="large" style={{marginTop:'50%'}}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Loading;