import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ListItem = (props) => {
    return (
        <View style={styles.listItemContainer}>
            <Text>{props.placeName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItemContainer:{
        backgroundColor: '#eee',
        padding:10,
        marginTop:10,
        width: '100%'
    }
})

export default ListItem
