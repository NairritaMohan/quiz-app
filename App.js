
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createSwitchNavigator, createAppContainer} from'react-navigation';
import QuestionScreen from './screens/QuestionScreen';
import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';


export default class App extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
       <AppContainer/>
       
      </View>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  QuestionScreen: {
    screen: QuestionScreen
  },

  ResultScreen:{
    screen :ResultScreen
  }

 
  
})


const AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b5cc',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
