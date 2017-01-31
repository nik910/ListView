import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import RouterPage from './application/components/RouterPage'

class ListViewUsingScrollView extends Component{
  constructor(props){
      super(props);
  }

  render() {
    return(
      <RouterPage/>
    );
  }
}

AppRegistry.registerComponent('ListViewUsingScrollView', () => ListViewUsingScrollView);
