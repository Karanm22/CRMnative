import React, { Component } from 'react'
import {View,StyleSheet,FlatList, Text, ImageBackground} from "react-native"
import PeopleItem from "./PeopleItem"
import { useSelector } from 'react-redux';
import Icon from "react-native-vector-icons/EvilIcons"
import PeopleDetail from './PeopleDetail';
import background from "../Images/background.jpg"

const styles=StyleSheet.create({
    container:{
        width:"100%",
        flexWrap:"wrap",
        paddingTop:50,
        
    },
    backgroundImage: {
        flex: 1,
        height:900,
        width:"100%"
      }
});

const PeopleList = () => {
    const people= useSelector((state)=>state.people)
    const detailViewState=useSelector((state)=>state.detailView)
    if(detailViewState===true){
        return (<PeopleDetail />)
    }
    return (
        <View style={styles.container}>
             <ImageBackground source={background} style={styles.backgroundImage}
            />
            <FlatList data={people} 
            renderItem={(item)=><PeopleItem people={item} />}
            keyExtractor={(item,index)=>index.toString()}
            />
        </View>
    )
}

export default PeopleList
