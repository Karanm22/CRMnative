import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers/peopleReducer';
import PeopleList from './PeopleList';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Navigation from './Navigation';


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

        <Navigation />
  
      </PaperProvider>
    </Provider>
  );
};

export default App;
