import React from 'react'
import {View,StyleSheet,Text, FlatList} from "react-native"
import _ from "lodash";
import CompanyItem from "./CompanyItem"
import { useSelector } from 'react-redux';


const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingLeft:20,
        flexWrap:"wrap",
        paddingTop:Platform.OS === 'ios' ?50:0,
        backgroundColor:"#e5e5e5"
        
    },
});

const CompanyList = () => {
    const people= useSelector((state)=>state.people)
    const companies = _.chain(people).groupBy("company").map((value,key)=>{
        return {
                company:key,
                name:value
            }
    }).value()
    console.log("cccccccccc",companies)
    return (
        <View style={styles.container}>
            <FlatList data={companies} 
            renderItem={(item)=><CompanyItem company={item} />}
            keyExtractor={(item,index)=>index.toString()}
            />
        </View>
    )
}

export default CompanyList
