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
      places:[]
    }
  }

  addNewPlaces = (inputText) => {
    this.setState({
      places: this.state.places.concat(inputText)
    })
  }

  render() {
    return (
      <View style={[{flex:1, justifyContent:'flex-start', paddingLeft:10, paddingRight:10}, platformSpecificStyle]}>
        <PlaceInput addPlaceData={this.addNewPlaces}/>
        <OutputPlace places={this.state.places}/>
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  
});
