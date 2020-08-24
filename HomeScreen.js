
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <TouchableOpacity 
        style = {styles.button}
        onPress = {()=>{
          this.props.navigation.navigate('QuestionScreen')
        }}
        >
          <Text style = {styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b5cc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText:{
    color : '#fff',
    fontSize :20


  },
  button :{
    backgroundColor: '#013243',
    paddingVertical: 20,
    paddingHorizontal : 20,
    borderRadius :20
  }
});
