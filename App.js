import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

import Addmeal from './Screens/Addmeal';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Detailmeal from './Screens/Detailmeal';
import Home from './Screens/Home';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    
      <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name= "Meals" component={Home} options={{ title:'Meals ',headerShown: false  }}/>
        <Tab.Screen name= "Comments" component={Addmeal} options={{ title:'Comments' ,headerShown: false  }}/>
        
        </Tab.Navigator>
        
    </NavigationContainer>
    
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
