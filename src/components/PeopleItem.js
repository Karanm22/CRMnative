import React from 'react'
import {StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import * as actions from "../actions"


import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useDispatch } from 'react-redux'


const LeftContent = props => <Avatar.Icon style={styles.icon} {...props} icon="account" /> 
const PeopleItem = ({people}) => {
    const dispatch=useDispatch()
    const handleClick=(p)=>{
        console.log("this is clicked",p)
        dispatch(actions.selectPerson(p))
    }
    return (
        <TouchableOpacity onPress={()=>handleClick(people)}>
        <Card style={styles.card}>
           
            <Card.Title style={styles.title} title={`${people.item.firstName} ${people.item.lastName}`} subtitle={people.item.company} left={LeftContent} />
        </Card>
        </TouchableOpacity>

    
    )
}

const styles=StyleSheet.create({
    card:{
        marginTop:20
    },
 
    image:{
        height:90
    },
    icon:{
        color:"white",
        backgroundColor:"black"
    },
    title:{
        width:350,
    }
 });

export default PeopleItem
