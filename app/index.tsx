import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
 
export default function App() {
 
  return (
    <View style={styles.container}>
      <Link style={styles.button} href='/lab4'>Lab4</Link>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 15,
    color: 'white',
    marginBottom: 20,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  }
});
 