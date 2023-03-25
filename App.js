import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Test from "./source/screens/Test";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Tab.Navigator>
      <Tab.Screen name="Home"  component={Test}/>
      <Tab.Screen name="Profile"  component={Test}/>
      <Tab.Screen name="Settings"  component={Test}/>
    </Tab.Navigator>
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
});
