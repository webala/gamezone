import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack';



export default function App() {
  let [fontsLoaded] = Font.useFonts({
    'JosefinSans': require('./assets/fonts/JosefinSans-VariableFont_wght.ttf'),
    'JosefinSans-Italic': require('./assets/fonts/JosefinSans-Italic-VariableFont_wght.ttf')
  })
  if (fontsLoaded) {
    return (
      <Navigator />
    );
  }
  else {
    return(
      <AppLoading />
    );
    
  }
  
}


