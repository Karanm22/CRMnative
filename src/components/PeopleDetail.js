import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import EmailImage from '../Images/email@2x.png.png';
import PhoneImage from '../Images/call@2x.png.png';
import SmsImage from '../Images/sms@2x.png.png';
import {nonePerson} from '../actions';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import BackgroundImage from "../Images/background.jpg"

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
    position: 'absolute',
    top: 40,
    left: 300,
    color: 'rgba(233,166,154,0.8)',
    backgroundColor: 'lightgrey',
    zIndex:100
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
  actionImage:{
      
  }
});

const PeopleDetail = () => {
  const people = useSelector(state => state.personSelected);
  const dispatch = useDispatch();
  console.log(people);

  return (
    <View>
        <ImageBackground source={BackgroundImage} style={styles.image} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.card}>
        <View>
        <IconButton
            icon="close"
            color={Colors.red500}
            size={30}
            style={styles.closeIcon}
            onPress={() => dispatch(nonePerson())}
          />
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
              left={props => <IconButton {...props} size={30} icon="pencil" />}
            />
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

export default PeopleDetail;