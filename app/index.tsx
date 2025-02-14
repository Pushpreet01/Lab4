import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter} from "expo-router";
 
export default function App() {
  const router = useRouter();
 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {router.navigate("/lab4")}}>
        <Text>Lab 4</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  }
});
 