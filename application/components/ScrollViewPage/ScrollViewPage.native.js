import React, {Component} from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import TouchableText from '../../Wrappers/TouchableText';
import imagePath from '../../data/imagePath';

export default class ScrollViewPage extends Component{
  constructor(props){
    super(props);

    this.offset=0;
    this.state = {
      mainArr: [],
    }
  }

  componentWillMount(){
    let tempArr = [];
    for(let index=0;index<10;index++){
      tempArr.push(
        <View>
          <Image style = {{height: 100+index, width: 100+index}} source = {require('../../assets/Images/sprinklr-squarelogo-1461344438537.png')}/>
          <Text style = {{justifyContent: 'center'}}>{index}</Text>
        </View>
      )
      // mainArr.push(<Image style = {{height: 100, width: 100}} source = {require('../../assets/Images/sprinklr-squarelogo-1461344438537.png')}/>);
    }

    this.setState({
      mainArr: this.state.mainArr.concat(tempArr),
    });

    console.log("Hi");
  }

  render(){
    // let mainArr = [];
    for(index=0;index<this.state.mainArr.length;index++){
      console.log(index);
    }
    return(
      <View style = {{flex: 1, padding: 20}}>
        <View style = {{height: 30, alignItems: 'center'}}>
          <TouchableText onPress = {() => Actions.pop()} text = "Scroll View Page" style = {{color: "blue"}}/>
        </View>
        <View style = {{flexGrow: 1, alignItems: 'center'}}>
          <ScrollView onScroll = {this.onScroll}>{this.state.mainArr}</ScrollView>
        </View>
      </View>
    );
  }

  onScroll = (e) => {
    let currentOffset = e.nativeEvent.contentOffset.y;
    console.log("I m here");
    if(currentOffset>this.offset){
      let tempArr = [];
      for(index=this.state.mainArr.length;index<Math.min(5000, this.state.mainArr.length+5);index++){
        tempArr.push(
          <View>
            <Image style = {{height: 100+index, width: (100+index)}} source = {require('../../assets/Images/sprinklr-squarelogo-1461344438537.png')}/>
            <Text>{index}</Text>
          </View>
        )
      }
      this.setState({
        mainArr: this.state.mainArr.concat(tempArr),
      });

      this.offset = currentOffset;
    }
  }
}
