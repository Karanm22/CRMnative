import React, { useState } from 'react'
import {View,StyleSheet,Text, ScrollView, TouchableOpacity, Platform} from "react-native"
import { TextInput,Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { createNewContact, loadInitialContacts } from '../actions';


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
    const dispatch = useDispatch()

    const [contact,setContact]=useState({
        firstName:null,
        lastName:null,
        phone:null,
        email:null,
        company:null,
        project:null,
        notes:""
    })
    const handleOnPress=()=>{
        dispatch(createNewContact(contact))
        dispatch(loadInitialContacts())
        navigation.navigate("People");
        setContact({firstName:null,
            lastName:null,
            phone:null,
            email:null,
            company:null,
            project:null,
            notes:null})
    }
    return (
       <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
           
           <View style={styles.form}>
           <Text style={styles.title}>Add a new contact</Text>
           <TextInput autoFocus style={styles.fieldStyle} onChangeText={text =>setContact({...contact,firstName:text})}  value={contact.firstName} label="First Name" />
           <TextInput style={styles.fieldStyle} onChangeText={text =>setContact({...contact,lastName:text})} value={contact.lastName} label="Last Name" />
           <TextInput style={styles.fieldStyle} onChangeText={text =>setContact({...contact,phone:text})} value={contact.phone} label="Phone Number" />
           <TextInput style={styles.fieldStyle} onChangeText={text =>setContact({...contact,email:text})} value={contact.email} label="Email" />
           <TextInput style={styles.fieldStyle} onChangeText={text =>setContact({...contact,company:text})} value={contact.company} label="Company" />
           <TextInput style={styles.fieldStyle} onChangeText={text =>setContact({...contact,project:text})} value={contact.project} label="Project" />
           <TextInput style={styles.fieldStyle} onChangeText={text =>setContact({...contact,notes:text})} value={contact.notes} label="Notes..." />
           <TouchableOpacity style={styles.addButton}>
            <Button onPress={handleOnPress} mode={"contained"} color={"lightgreen"}>Submit</Button>
           </TouchableOpacity>
           </View>
        </ScrollView>
       </View>
    )
}

export default AddPerson
