import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "./input";
import Button from "../UI/Button";

const Form = ({onCancle,onSubmit,SubmitLabel,defaultValue}) => {
    
  const [inputs, setInputs] = useState({
    title:defaultValue?defaultValue.title:"",
    address:defaultValue?defaultValue.address: "",
    likes:defaultValue?defaultValue.likes.toString(): "",
    url:defaultValue?defaultValue.url: "",
  });

  const inputHandler = (inputIdentifier, enteredValue) => {
    setInputs((curInput) => {
      return {
        ...curInput,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  // const titleChangeHandler=()=>{

  // }
  // const AddressChangeHandler=()=>{

  // }
  // const likesChangeHandler=()=>{

  // }
  // const urlChangeHandler=()=>{

  // }
  const submitHandler=()=>{
    const inputItem={
        title:inputs.title,
        address:inputs.address,
        likes:+inputs.likes,
        url:inputs.url
    }

    if(inputItem.title=='' || inputItem.address=='' || inputItem.likes=='' || inputItem.url==''){
        alert('please enter right data')
    }
    else{
        onSubmit(inputItem)
    }
    

  }
  return (
    <View>
      <Input
        label="Title"
        txtconfig={{
          placeholder: "enter title",
          value: inputs.title,
          onChangeText: inputHandler.bind(this,'title'),
        }}
      />
      <Input
        label="Address"
        txtconfig={{
          placeholder: "enter Address",
          value: inputs.address,
          onChangeText: inputHandler.bind(this,'address'),
        }}
      />
      <Input
        label="Likes"
        txtconfig={{
          placeholder: "enter likes",
          value: inputs.likes,
          keyboardType: "numeric",
          onChangeText: inputHandler.bind(this,'likes'),
        }}
      />
      <Input
        label="URL"
        txtconfig={{
          placeholder: "enter url",
          value: inputs.url,
          multiline: true,
          onChangeText: inputHandler.bind(this,'url'),
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={onCancle}>
          cancle
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {SubmitLabel}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop:20
      },
      button: {
        minWidth: 120,
        marginHorizontal: 8,
      },
});

export default Form;
