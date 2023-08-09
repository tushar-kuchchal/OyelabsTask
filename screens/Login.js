import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button,ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("please enter the crendentails");
    }
    else{
    if (checkEmail(email)) {
        setEmail('')
        setPassword('')
      navigation.navigate("home");
    } else {
      alert("Enter correct Email");
    }}
  };
  const checkEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3} [)]?[\s\.]?[0-9]{3} [-\s\.]?[0-9]{4,6}$/im;
    if (re.test(email) || regex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={{flex:1}} >
      <View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TextInput
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
        value={email}
        placeholder="Enter Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
        value={password}
        placeholder="Enter Password"
      />
      <Button onPress={handleLogin} title="Login" color="#841584" />
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    width: "70%",
    borderWidth: 1,
    padding: 10,
  },
 
});

export default Login;
