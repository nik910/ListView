import React, {Component} from 'react';
import {View, Image, ListView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import TouchableText from '../../Wrappers/TouchableText';
import imagePath from '../../data/imagePath';
// import imageSprinklr from '../../assets/Images/sprinklr-squarelogo-1461344438537.png';

export default class ListViewPage extends Component{
  render(){
    console.log(imagePath[3]);
    let mainArr = [];
    for(let index=0;index<10000;index++){
      mainArr.push('https://media.glassdoor.com/sqll/427532/sprinklr-squarelogo-1461344438537.png');
    }

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    mainArr = ds.cloneWithRows(mainArr);

    return(
      <View style = {{flex: 1, padding: 20}}>
        <View style = {{height: 30, alignItems: 'center'}}>
          <TouchableText onPress = {() => Actions.scrollViewPage()} text = "List View Page" style = {{color: "blue"}}/>
        </View>
        <View style = {{flexGrow: 1, alignItems: 'center'}}>
          <ListView
            dataSource = {mainArr}
            renderRow = {this.renderData}
          />
        </View>
      </View>
    );
  }

  renderData = (data, x, index) => {
    console.log(index);
    return(
      <View>
        <Image source = {{uri: data}} style = {{height: 100+parseInt(index), width: 100+parseInt(index)}}/>
      </View>
    )
  }
}
