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
  }

  render() {
    return (
      <View style={[{flex:1, justifyContent:'flex-start', paddingLeft:10, paddingRight:10}, platformSpecificStyle]}>
        <PlaceInput/>
        
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  
});
