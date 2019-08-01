import React from 'react'
import {FlatList} from 'react-native';
import ListItem from '../listItem/ListItem';

const OutputPlace = (props) => {

    return (
        <FlatList data={props.places} renderItem={({item})=><ListItem placeName={item.value} placeImage={item.image} onPressItem={()=>props.onPressModal(item.key)}/>}/>
    )
}

export default OutputPlace
