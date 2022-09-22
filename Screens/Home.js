import { View, Text,SafeAreaView,StyleSheet, FlatList, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Avatar, ListItem } from 'react-native-elements';

import { collection,getDocs } from "firebase/firestore";
import {firebase} from '../BBDD/bd';


const Home = ({navigation}) => {
    const [data , setData]= useState()
    const todo = firebase.firestore().collection('Meals');
    async function loadData(){
        try{
            const Meals = await getDocs(todo);
            setData(Meals.docs);
        }catch(e){
            console.log(e)
        }

    }

    useEffect(()=>{
        loadData();
    },
    []);
    function renderItem({item}){
        return(
        
            <SafeAreaView>
                 <ScrollView>
            <View style={styles.container}>
            
            <ListItem >
            <Avatar style={styles.image} rounded source={{uri: item.data().image}}></Avatar>
              <ListItem.Content >
                <ListItem.Title>{item.data().name}</ListItem.Title>
                <ListItem.Subtitle>{item.data().details}</ListItem.Subtitle>
                <ListItem.Subtitle>{item.data().price}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            
            </View>
            </ScrollView>
            </SafeAreaView>
            
        );
    }
  return (
    <SafeAreaView>
        <ScrollView >
    <View>
        
        <Text style={styles.text}>MEALS </Text>

    <FlatList 
    data ={data}
    renderItem ={renderItem}
    keyExtractor = {item=>item.id}/>
    
    </View>
    </ScrollView>
    </SafeAreaView>
  );
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    text:{
        textAlign:'center',
        fontSize:42,
    },
    image:{
        justifyContent:'center',
        display:'block',
        width:100,
        height:100,
    }
  });
export default Home;

