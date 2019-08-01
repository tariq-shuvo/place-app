import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

const ListItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPressItem}>
            <View style={styles.listItemContainer}>
                <Image style={styles.imageStyle} source={props.placeImage}/>
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItemContainer:{
        backgroundColor: '#eee',
        padding:10,
        marginTop:10,
        width: '100%',
        flexDirection: 'row',
        alignContent:"center",
        alignItems: "center"
    },
    imageStyle:{
        width:25,
        height:25,
        marginRight: 10
    }
})

export default ListItem
