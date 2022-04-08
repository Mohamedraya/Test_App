import React from "react";
import {useRoute} from "@react-navigation/native";
import {View,Text,Image} from "react-native";
import styles from "./styles";

function Details () {

  const route = useRoute();

    return (
        <View style={styles.container}>
          <Image style={styles.img} source={{uri: route.params.itemPicture}}/>
          <View style={styles.details}>
             <Text style={styles.name}>{route.params.itemName}</Text>
             <Text style={styles.email}>{route.params.itemEmail}</Text>
          </View>
        </View>
    );
};


export default Details;