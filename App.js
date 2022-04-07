import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from './src/navigation/HomeNavigation';


function App () {
  return (
    <NavigationContainer>
       <HomeNavigation/>
    </NavigationContainer>
  );
}

export default App;

