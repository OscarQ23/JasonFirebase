import { View, Text,SafeAreaView,StyleSheet, FlatList, TextInput, Keyboard, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Avatar, Button, ListItem } from 'react-native-elements';
import { collection,getDocs,doc, setDoc } from "firebase/firestore";
import {firebase} from '../BBDD/bd';

const Detailmeal = ({navigation}) => {
    
    const todo = firebase.firestore().collection('Comments');
    const initialState = {
      Comments: "",
    };
    const [uComments, setUComments]=useState(initialState);
    const handleTextChange = (value, prop) => {
      setUComments({ ...uComments, [prop]: value });
    };

    const getCommentById = async (id) => {
      const dbRef = todo.doc(id);
      const doc = await dbRef.get();
      const uComments = doc.data();
      setUComments({ ...uComments, id: doc.id });
      setLoading(false);
    };
  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput
          placeholder="Comment"
          style={styles.inputGroup}
          value={uComments.Comments}
          onChangeText={(value) => handleTextChange(value, "Comments")}
        />
      </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  btn: {
    borderRadius:20,
    marginBottom: 7,
  },
});
export default Detailmeal