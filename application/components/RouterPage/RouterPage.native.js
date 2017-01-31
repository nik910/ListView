import React, { Component } from 'react';
import {Router, Scene} from 'react-native-router-flux';
import ScrollViewPage from '../ScrollViewPage';
import ListViewPage from '../ListViewPage';

export default class RouterPage extends Component{
  render(){
    return(
      <Router>
        <Scene key = "root">
          <Scene key = "listViewPage" initial component = {ListViewPage} hideNavBar />
          <Scene key = "scrollViewPage" component = {ScrollViewPage} hideNavBar />
        </Scene>
      </Router>
    );
  }
}
