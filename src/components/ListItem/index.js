import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity} from "react-native";
import styles from "./styles";


function ListItem ({name,email,image,onPress}) {

    return (
        <TouchableOpacity onPress={onPress}>
           <View style={styles.container}>
              <Image style={styles.image} source={{uri: image}}/>
              <View style={styles.detailsContainer}>
                 <Text>Name:</Text>
                 <Text>Email:</Text>
              </View>
              <View style={styles.detailsContainer}>
                 <Text>{name}</Text>
                 <Text>{email}</Text>
              </View>
           </View>
        </TouchableOpacity>
    );
}



export default ListItem;
