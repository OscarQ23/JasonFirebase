import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Addmeal from '../Screens/Addmeal';
import Detailmeal from '../Screens/Detailmeal';
import Home from '../Screens/Home';


export default function Navigation() {

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
    
  }}>
      <Stack.Screen name='Addmeal' component={Addmeal}options={{headerShown:false}} />
      <Stack.Screen name='Detailmeal' component={Detailmeal}/>
      <Stack.Screen name="Home" component={Home} />

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
 
 
});