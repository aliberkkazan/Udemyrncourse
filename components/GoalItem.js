import { View, Text, StyleSheet, Pressable } from 'react-native'


function GoalItem(props){
  return (
    <View style={styles.goalItems}>
      <Pressable 
        android_ripple={{color:'aqua'}} 
        onPress={props.onDeleteItem.bind(this,props.id)}>
     
              <Text style={styles.goalText} >{props.text}</Text>
              </Pressable>
            </View>
    
  );
}

export default GoalItem;

const styles=StyleSheet.create({
    goalItems:{
        margin:8,
        
        borderRadius:6,
        backgroundColor:"blue",
        
      },
      goalText:{
        padding:8,
        fontStyle:'italic',
        fontSize:14,
        textAlign:'center',
        color:'black'
      }
});
