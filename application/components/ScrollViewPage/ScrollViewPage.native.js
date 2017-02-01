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
      secArr: [],
      indexComponent: 0,
      top: 0,
      componentNumber: 0,
    }
  }

  componentWillMount(){
    let tempArr = [];
    for(let index=0;index<10;index++){
      tempArr.push(
        <View>
          <Image style = {{height: 100, width: 100}} source = {require('../../assets/Images/sprinklr-squarelogo-1461344438537.png')}/>
          <Text style = {{justifyContent: 'center'}}>{index}</Text>
        </View>
      )
      // mainArr.push(<Image style = {{height: 100, width: 100}} source = {require('../../assets/Images/sprinklr-squarelogo-1461344438537.png')}/>);
    }

    this.setState({
      mainArr: this.state.mainArr.concat(tempArr),
      indexComponent: 15,
    });

    console.log("Hi");
  }

  render(){
    // let mainArr = [];
    // for(index=0;index<this.state.mainArr.length;index++){
    //   console.log(index);
    // }
    return(
      <View style = {{flex: 1, padding: 20}}>
        <View style = {{height: 30, alignItems: 'center'}}>
          <TouchableText onPress = {() => Actions.listViewPage()} text = "Scroll View Page" style = {{color: "blue"}}/>
        </View>
        <View style = {{flexGrow: 1, alignItems: 'center'}}>
          <ScrollView onScroll = {this.onScroll} scrollEventThrottle = {16}>{this.state.mainArr}</ScrollView>
        </View>
      </View>
    );
  }

  onScroll = (e) => {
    let currentOffset = e.nativeEvent.contentOffset.y;
    console.log(currentOffset, e.nativeEvent.contentOffset);
    let componentNumber = parseInt(currentOffset/118);
    // componentNumber+=this.top;
    //
    // if(componentNumber!==this.state.componentNumber){
    //   if(componentNumber>this.state.componentNumber){
    //     for(let index)
    //   }
    // }
    // componentNumber=componentNumber;
    // if(componentNumber)
    console.log(this.state.mainArr.length, componentNumber, this.state.componentNumber);

    // console.log("I m here");
    if(currentOffset>this.offset && componentNumber>this.state.componentNumber){
      console.log("Hihdcwjn");
      let tempArr = [];
      for(let index=this.state.mainArr.length;index<Math.min(5000, this.state.mainArr.length+2);index++){
        tempArr.push(
          <View>
            <Image style = {{height: 100, width: (100)}} source = {require('../../assets/Images/sprinklr-squarelogo-1461344438537.png')}/>
            <Text>{index}</Text>
          </View>
        )
      }

      // for(let index = )
      this.setState({
        mainArr: this.state.mainArr.concat(tempArr),
        top: Math.max(0,componentNumber),
        indexComponent: Math.min(5000, this.state.indexComponent+10),
        componentNumber: componentNumber
      });

      this.offset = currentOffset;
    }

    else if(this.state.componentNumber>componentNumber){
      this.setState({
        componentNumber: componentNumber,
      })
    }

    // else{
    //   let tempArr = [];
    // }
  }
}
