/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import PlaceInput from './src/components/inputComponents/PlaceInput';
import OutputPlace from './src/components/outputComponent/OutputPlace';

import PlaceModalScreen from './src/components/placeDetails/PlaceModal'

const instructions = Platform.select({
  ios: 'Hello world for ios device',
  android:
    'Hello world for android device'
});

const platformSpecificStyle = Platform.select({
  ios:{
    paddingTop: 60,
  },
  android:{
  }
});


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      places:[],
      placeDetailsModalInfo: null
    }
  }

  addNewPlaces = (inputText) => {
    this.setState({
      places: this.state.places.concat({key: Math.random().toString(36).substr(2, 9), value: inputText, image: {uri: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190712115834-01-lake-como-hotels-mandarin.jpg'}})
    })
  }

  onDeleteHandler = keyIndex => {
    this.setState((preState)=>{
      return {
        places: preState.places.filter((place)=>{
          return place.key !== keyIndex
        }),
        placeDetailsModalInfo:null
      }
    })
  } 

  onPressModalHandler = (keyIndex) => {
    this.setState((prevState)=>{
      return {
        placeDetailsModalInfo: prevState.places.find((place)=>{
          return place.key===keyIndex
        })
      };
    }) 
  }

  onClosePlaceModal = () => {
    this.setState({
      placeDetailsModalInfo:null
    })
  }

  render() {
    return (
      <View style={[{flex:1, justifyContent:'flex-start', paddingLeft:10, paddingRight:10}, platformSpecificStyle]}>
        <PlaceModalScreen placeModalInfo={this.state.placeDetailsModalInfo} modalClose={this.onClosePlaceModal} onDeletePlaceHandler={this.onDeleteHandler}/>
        <PlaceInput addPlaceData={this.addNewPlaces}/>
        <OutputPlace places={this.state.places} onDeleteItem={this.onDeleteHandler} onPressModal={this.onPressModalHandler}/>
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  
});
