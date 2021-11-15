import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import EmailImage from '../Images/email@2x.png.png';
import PhoneImage from '../Images/call@2x.png.png';
import SmsImage from '../Images/sms@2x.png.png';
import {deleteContact, nonePerson} from '../actions';
import {Avatar, Card} from 'react-native-paper';
import BackgroundImage from "../Images/background.jpg"
import UpdatePerson from './UpdatePerson';

const PeopleDetail = ({navigation}) => {
  const people = useSelector(state => state.personSelected);
  const dispatch = useDispatch();
  console.log(people);
  const onEdit=()=>{
    console.log(".......edit is clicked",navigation)
    navigation.navigate("Update");
  }
  const ondelete=(id)=>{
    dispatch(deleteContact(id))
  }
  return (
    <View>
        <ImageBackground source={BackgroundImage} style={styles.image} />
        <IconButton
            icon="close"
            color={"white"}
            size={30}
            style={styles.closeIcon}
            onPress={() => dispatch(nonePerson())}
          />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.card}>
        <View>
          <Card>
            <Card.Title
              title={`${people.item.firstName} ${people.item.lastName}`}
              style={styles.card}
              subtitle={people.item.company}
              titleStyle={styles.title1}
              subtitleStyle={styles.title1}
              left={props => <Avatar.Icon {...props} icon="account" color={"white"} size={60} style={styles.icon} />}
            />
            <Card.Content>
            <Card.Title
              title={people.item.phone}
              left={props => <IconButton {...props} size={30} icon="phone" />}
            />
             <Card.Title
              title={people.item.email}
              left={props => <IconButton {...props} size={30} icon="email" />}
            />
             <Card.Title 
              title={people.item.project}
              left={props => <IconButton {...props} size={30} icon="home" />}
            />
             <Card.Title
              title={people.item.notes}
              left={props => <IconButton {...props} size={30} icon="note" />}
            />
            <View style={styles.editArea}>
          <TouchableOpacity onPress={onEdit}>
            <IconButton icon="pencil" size={40} style={styles.editIcon} />
            <Text style={styles.editButton}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>ondelete(people.item._id)}>
            <IconButton color={"red"} icon="delete" size={40} style={styles.editIcon} />
            <Text style={styles.editButton}>Delete</Text>
          </TouchableOpacity>
  
        </View>
            </Card.Content>
          </Card>
        </View>
        
        <View style={styles.actionArea}>
          <TouchableOpacity>
            <Image source={PhoneImage} style={styles.actionImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={EmailImage} style={styles.actionImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={SmsImage} style={styles.actionImage} />
          </TouchableOpacity>
          
        </View>
        <View style={styles.actionArea}>
            <Text>Call</Text>
            <Text>Email</Text>
            <Text>SMS</Text>
          </View>
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  card: {
    marginTop: 50,
    paddingBottom: 20,
    marginBottom: 20,

  },
  title1: {
    left:30,
    fontSize: 24,
    fontWeight:"600",
    lineHeight:30
  },
  image: {
    flex: 1,
    height: 100,
    width: "100%",
    resizeMode: 'cover'

  },
  closeIcon: {
    position:"absolute",
    top:Platform.OS === 'ios' ? 60:0,
    left: Platform.OS === 'ios' ? 300:350,
    backgroundColor: 'red',
    margin:10,
    zIndex:1000
  },
  icon: {
    top: 0,
    left: 0,
    backgroundColor: 'grey',
  },
  textArea: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 10,
    width: 260,
  },
  textIcons: {
    color: '#26a69a',
    
  },
  actionArea: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  editArea:{
    flexDirection:"row",
    paddingLeft:20,
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor:"rgba(211,211,211,0.3)",
    marginBottom:10,
    paddingBottom:10
  },
  actionImage:{
    width:70,
    height:70
  }

});


export default PeopleDetail;
