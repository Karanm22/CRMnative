import React, { useState } from 'react'
import {View,StyleSheet,Text, ScrollView, TouchableOpacity, Platform} from "react-native"
import { TextInput,Button } from 'react-native-paper';


const styles=StyleSheet.create({
  form:{
      flex:1,
      paddingTop: Platform.OS === 'ios' ?30:0,
      paddingBottom:10,
      paddingLeft:20,
    paddingRight:20,
    justifyContent:"space-between"
  },
  fieldStyle:{
      height:70,
      color:"orange",
  },
  addButton:{
      marginTop:20
  },
  container:{
      paddingTop:50
  },
  title:{
      fontSize:30,
      marginBottom:10,
      textAlign:"center"
  }
});

const AddPerson = ({navigation}) => {

    // const [contact,setContact]=useState({
    //     firstName
    // })
    const handleOnPress=()=>{
    console.log(navigation)
    }
    return (
       <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
           
           <View style={styles.form}>
           <Text style={styles.title}>Add a new contact</Text>
           <TextInput style={styles.fieldStyle} label="First Name" />
           <TextInput style={styles.fieldStyle} label="Last Name" />
           <TextInput style={styles.fieldStyle} label="Phone Number" />
           <TextInput style={styles.fieldStyle} label="Email" />
           <TextInput style={styles.fieldStyle} label="Company" />
           <TextInput style={styles.fieldStyle} label="Project" />
           <TextInput style={styles.fieldStyle} label="Notes..." />
           <TouchableOpacity style={styles.addButton}>
            <Button onPress={handleOnPress} mode={"contained"} color={"lightgreen"}>Submit</Button>
           </TouchableOpacity>
           </View>
        </ScrollView>
       </View>
    )
}

export default AddPerson
