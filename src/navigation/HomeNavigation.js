import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";


const Stack = createNativeStackNavigator();

function HomeNavigation () {
    return (
        <Stack.Navigator>
           <Stack.Screen name= "HomeScreen"    component={HomeScreen} options={{headerShown: false}}/>
           <Stack.Screen name= "DetailsScreen" component={DetailsScreen}/>
        </Stack.Navigator>
    );
};

export default HomeNavigation;