import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import AddPerson from './AddPerson';
import CompanyList from './CompanyList';
import PeopleList from './PeopleList';


export default class Navigation extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'people', title: 'People', icon: 'account',color: 'skyblue' },
      { key: 'Add', title: 'Add', icon: 'plus',color: 'lightgreen'  },
      { key: 'Company', title: 'Company', icon: 'office-building', color: 'lightyellow'  },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    people: PeopleList,
    Add: AddPerson,
    Company: CompanyList,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        barStyle={{backgroundColor:"skyblue"}}
        renderScene={this._renderScene}
        shifting={true}
      />
    );
  }
}