import { Text, View, TextInput,StyleSheet } from "react-native";

function Input({ label, txtconfig,style }) {
  const inputStyle=[styles.inputtxt]
  if( txtconfig && txtconfig.multiline){
    inputStyle.push(styles.multilinetxt)
  }
  return (
    <View style={[style,styles.inputContainer]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...txtconfig} style={inputStyle} />
    </View>
  );
}
export default Input;
const styles=StyleSheet.create({
  inputContainer:{
    marginHorizontal:6,
    marginVertical:8,
    
    


  },
  label:{
    color:'black',
    fontSize:15,
    marginBottom:4,
    

  },
  inputtxt:{
    borderRadius:6,
    padding:6,
    backgroundColor:'#c6affc',
    color:'#2d0689',
    fontSize:18

  },
  multilinetxt:{
    minHeight:100,
    textAlignVertical:'top'
  }

})
