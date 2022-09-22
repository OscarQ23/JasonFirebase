import { View, Text,SafeAreaView,StyleSheet, FlatList, TextInput, Keyboard, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Avatar, Button, ListItem } from 'react-native-elements';

import { collection,getDocs,doc, setDoc } from "firebase/firestore";
import {firebase} from '../BBDD/bd';

const Addmeal = ({navigation}) => {

    //GET
    const [data , setData]= useState()
    const [addData, setAddData]=useState('');
    const todo = firebase.firestore().collection('Comments');
    async function loadData(){
        try{
            const Comments = await getDocs(todo);
            setData(Comments.docs);
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
            <ListItem  onPress={()=>props.navigation.navigate("CreateUserScreen")}>
        
              <ListItem.Content 
              >
                <ListItem.Title>{item.data().Comments}</ListItem.Title>
                <ListItem.Subtitle>{item.data().id}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron/>
            </ListItem>
            </View>
            </ScrollView>
            </SafeAreaView>
        );
    }
   //POST
   
    
        function addField(){ 
            try{
            if(addData && addData.length>0){
            
            const postingdata ={
                Comments:addData
            };
            todo
            .add(postingdata).then(()=>{
                setAddData('');
                Keyboard.dismiss();
            }).catch((error)=>{
                alert(error);
            })
        }
    }
        
        
    catch(e){
        console.log(e)
    }
}

  return (
    
    <View style={{margin:15}}>
        
         <View>
            <TextInput
            placeholder='write here'
            value={addData}
            onChangeText={(Comments)=> setAddData(Comments)}
            style={styles.input}
            autoCapitalize={false}
            />
            <Button
            title='Post your comments :D'
            onPress={addField}
        />
        </View>
    
        <View >
            <Text style={styles.text}>Leave your comments </Text>
            <FlatList 
            data ={data}
            renderItem ={renderItem}
         keyExtractor = {item=>item.id}/>
        </View>
        
    </View>
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
    },
    input:{
        backgroundColor:'#f0f0f0',
        borderRadius:10,
        marginBottom:15,
        padding:10,
    }
  });
export default Addmeal;