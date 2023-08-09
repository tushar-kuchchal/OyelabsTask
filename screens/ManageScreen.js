import React, { useContext, useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import ButtonIcon from "../UI/ButtonIcon";
import Button from "../UI/Button";
import { ItemContext } from "../store/itemContext";
import Form from "../manageItemForm/form";

const ManageScreen = ({ route, navigation }) => {
  const itemCntx = useContext(ItemContext);
  const id = route.params?.id;
  const isEdited = !!id;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdited ? "Edit Item" : " Add Item",
    });
  }, [isEdited, navigation]);
  const defaultValue=itemCntx.items.find((item)=>item.id===id)
  
  const deleteHandler = () => {
    itemCntx.deleteItem(id);
    navigation.goBack();
  };
  const cancleHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = (inputItem) => {
    if (isEdited) {
      itemCntx.updateItem(id, inputItem);
    } else {
      itemCntx.addItem(inputItem);
    }
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Form onCancle={cancleHandler} SubmitLabel={isEdited ? "Update" : "Add"} onSubmit={confirmHandler} defaultValue={defaultValue}/>
      

      {isEdited && (
        <View style={styles.deleteContainer}>
          <ButtonIcon
            icon="trash"
            color="red"
            size={36}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,

    alignItems: "center",
  },
  
});

export default ManageScreen;
