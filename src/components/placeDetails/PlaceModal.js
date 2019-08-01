import React from 'react'
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native';

const PlaceModal = (props) => {
    let modalContent = null;

    if(props.placeModalInfo!==null){
        modalContent = (
            <View>
                <Image style={styles.imageDisplay} source={props.placeModalInfo!==null ? props.placeModalInfo.image : ""}/>
                <Text style={styles.textStyle}>{props.placeModalInfo!==null ? props.placeModalInfo.value : ""}</Text>
                <Button title="Delete" color="red" onPress={()=>props.onDeletePlaceHandler(props.placeModalInfo.key)}/>
                <Button title="Close" onPress={props.modalClose}/>
            </View>
        )
    }

    return (
            <Modal animationType="slide" visible={props.placeModalInfo!==null} onRequestClose={props.modalClose}>
                {modalContent}
            </Modal>
    )
}

const styles = StyleSheet.create({
    imageDisplay:{
        width:'100%',
        height: 340
    },
    textStyle:{
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold",
      padding: 5  
    }
});

export default PlaceModal
