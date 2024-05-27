import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>My name is Emmanuel Sakyi</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
  },
});
