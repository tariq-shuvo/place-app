import React, {Component} from 'react';
import {Platform, View, StyleSheet, TextInput, Button} from 'react-native';


const platformSpecificStyle = Platform.select({
    ios:{
      inputField:{
        paddingTop: 5,
        paddingBottom: 5,
      }
    },
    android:{
      inputField:{
        paddingTop: 5,
        paddingBottom: 5
      }
    }
  });

class PlaceInput extends Component{
    constructor(props){
        super(props) 
        this.state={
            inputText:''
          }
    }

    _onSubmitHandler = () => {
        if(this.state.inputText.trim()===""){
          return "";
        }
    
        this.props.addPlaceData(this.state.inputText)
        // this.setState({
        //     inputText:''
        // })
      }

    render(){
        return(
            <View style={styles.inputContainer}>
                    <TextInput value={this.state.inputText} style={[{width: '80%', borderBottomWidth:1, borderBottomColor:'black'}, platformSpecificStyle.inputField]} onChangeText={(val)=>{this.setState({
                    inputText:val
                    })}} placeholder={'Please enter a value'}/>
                    <Button style={styles.okayButton} onPress={this._onSubmitHandler} title={'Ok'}/>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    inputField:{
      width:"70%"
    },
    okayButton:{
      width:"20%"
    },
    inputContainer:{
      flexDirection:'row',
      alignItems:"center",
      justifyContent:"space-between"
    }
  });

export default PlaceInput