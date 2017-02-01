import React, { Component } from 'react';
import {Router, Scene} from 'react-native-router-flux';
import ScrollViewPage from '../ScrollViewPage';
import ListViewPage from '../ListViewPage';

export default class RouterPage extends Component{
  render(){
    return(
      <Router>
        <Scene key = "root">
          <Scene key = "listViewPage" component = {ListViewPage} hideNavBar />
          <Scene key = "scrollViewPage" initial component = {ScrollViewPage} hideNavBar />
        </Scene>
      </Router>
    );
  }
}
