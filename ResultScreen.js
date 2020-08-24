
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ResultScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {{fontSize:40, color :'#fff'}}>SCORE :{this.props.navigation.getParam('score')}/10</Text>
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
  }
});
