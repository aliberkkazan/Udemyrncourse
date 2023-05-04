import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

export default function GoalInput(props) {
    const[enteredGoalText,setEnteredGoalText]=useState('');

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
      }
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }  
  return (
    <View style={styles.inputContainer}> 
        <TextInput style={styles.textInput} 
        onChangeText={goalInputHandler} 
        placeholder = "Your course goal!"
        value={enteredGoalText}
        />

        <Button onPress={addGoalHandler}
        title='add goal'/>
        </View>
  )
}
const styles=StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:24,
        borderBottomWidth:1,
        borderBottomColor:'blue'
      },
      textInput:{
        borderWidth:1.4,
        borderColor:'black',
        width:'70%',
        marginRight:8,
        padding:5
        
      }
});