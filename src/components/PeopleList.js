import React, { Component, useEffect } from 'react'
import {View,StyleSheet,FlatList, Text, ImageBackground, Platform} from "react-native"
import PeopleItem from "./PeopleItem"
import { useDispatch, useSelector } from 'react-redux';
import Icon from "react-native-vector-icons/EvilIcons"
import PeopleDetail from './PeopleDetail';
import background from "../Images/background.jpg"
import { loadInitialContacts } from '../actions';

const styles=StyleSheet.create({
    container:{
        width:"100%",
        flexWrap:"wrap",
        paddingTop:Platform.OS === 'ios' ?50:0,
        
    },
    backgroundImage: {
        flex: 1,
        height:900,
        width:"100%"
      }
});

const PeopleList = ({navigation}) => {
    const people= useSelector((state)=>state.people)
    const detailViewState=useSelector((state)=>state.detailView)
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            dispatch(loadInitialContacts())
          });
          return () => {
            // Unsubscribe for the focus Listener
            unsubscribe;
          };
    }, [])

    if(detailViewState===true){
        return (<PeopleDetail navigation={navigation} />)
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
