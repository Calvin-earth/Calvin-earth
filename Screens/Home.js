import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import Color from '../Constant/Color';
import {Ionicons} from "@expo/vector-icons";

const ListButton = (props) =>{
  return(<TouchableOpacity onPress={()=>{}} style = {styles.itemContainer}>
  <View><Text style={styles.itemTitle}>{props.title}</Text></View>
  <View style={{flexDirection:"row"}}>
    <TouchableOpacity onPress={()=>{}} >
      <Ionicons name="options-outline" size={24} color="white"/>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{}} >
      <Ionicons name="trash-outline" size={24} color="white"/>
    </TouchableOpacity>
  </View>
</TouchableOpacity>
);
}

export default () =>{
  return(
    <View style= {styles.container}>
        <ListButton title="List 1"/>
        <ListButton title="School"/>
        <ListButton title="work"/>
        <ListButton title="Fun"/>
        <ListButton title="Fun"/>
        <ListButton title="Fun"/>
        <ListButton title="Fun"/>
        <ListButton title="Fun"/>
        <ListButton title="Fun"/>
        <ListButton title="Fun"/>


    </View>);
}

const styles = StyleSheet.create({

  container:{ 
   flex: 1,
   backgroundColor: "#fff",  
  },

  itemTitle:{fontSize:24, padding:5, color:"white"},


  itemContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    height:"100",
    flex:1,
    borderRadius:20,
    marginHorizontal:20,
    marginVertical:10,
    padding:15,
    backgroundColor:Color.blue,
    },

  icon: {
    padding:5,
    fontSize:24,
  },
  centerView:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:50,
      
  },     
  modalView:{
    backgroundColor:"white",
    borderRadius:20,
    padding:35,
    alignItems:"center",
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:3.84,
    elevation:5,
  },

 });