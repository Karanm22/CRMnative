import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import * as actions from '../actions';

import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {useDispatch} from 'react-redux';

const LeftContent = props => (
  <Avatar.Icon style={styles.icon} {...props} icon="office-building" />
);
const CompanyItem = ({company}) => {
  console.log('>>>>>>>>>>>', company.item.name);
  return (
    <View>
      <Card style={styles.card}>
        <Card.Title
          style={styles.title}
          title={company.item.company}
          left={LeftContent}
        />
        <Card.Content>
            {company.item.name.map((person,index)=>(
                <Paragraph>{`${person.firstName} ${person.lastName}`}</Paragraph>
            ))}
        
    </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },

  image: {
    height: 90,
  },
  icon: {
    color: 'white',
    backgroundColor: 'black',
  },
  title: {
    width: 350,
  },
});
export default CompanyItem;
