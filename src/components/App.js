import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers/peopleReducer';
import PeopleList from './PeopleList';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AddPerson from './AddPerson';
import CompanyList from './CompanyList';
const Tab = createMaterialBottomTabNavigator();


const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
        <Tab.Navigator shifting={true} >
        <Tab.Screen name="People" options={{tabBarIcon:"account",tabBarColor:"skyblue"}} component={PeopleList} />
        <Tab.Screen name="Add" options={{tabBarIcon:"plus",tabBarColor:"lightgreen"}} component={AddPerson} />
        <Tab.Screen name="Companies" options={{tabBarIcon:"office-building",tabBarColor:"red",}} component={CompanyList} />
        </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
