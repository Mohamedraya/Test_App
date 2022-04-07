import React from "react";
import {View,Text,Image} from "react-native";
import styles from "./styles";

function Details ({route}) {

  const {itemPicture,itemName,itemEmail} = route.params;

    return (
        <View style={styles.container}>
          <Image style={styles.img} source={{uri: itemPicture}}/>
          <View style={styles.details}>
             <Text style={styles.name}>{itemName}</Text>
             <Text style={styles.email}>{itemEmail}</Text>
          </View>
        </View>
    );
};


export default Details;