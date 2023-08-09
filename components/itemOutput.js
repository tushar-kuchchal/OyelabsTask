import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { ItemContext } from "../store/itemContext";



const ItemOutput = () => {
  const navigation = useNavigation();
  const itemCntx=useContext(ItemContext)
  const DummyItem=itemCntx.items
  console.log(DummyItem)
  const onPressHandler = (id) => {
    console.log(id)
    navigation.navigate("manageScreen",{id:id});
  };

  const renderItem = (item) => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            height: 100,
            width: "95%",
            borderWidth: 1,
            borderColor: "black",
            margin: 10,
          }}
          onPress={() => onPressHandler(item.item.id)}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Image
              style={{ height: "100%", width: 100 }}
              source={{ uri: item.item.url }}
              alt="no image"
            />

            <View style={{ marginLeft: 20, justifyContent: "center" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.item.title}
              </Text>
              <Text style={{ fontSize: 15 }}>{item.item.address}</Text>
              <Text style={{ fontSize: 15 }}>{`${item.item.likes}-Likes`}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      {DummyItem.length===0 ? (
        <View
          style={{  justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{fontSize:30,fontWeight:'bold'}}>No Item Exist</Text>
        </View>
      ) : (
        <FlatList
          data={DummyItem}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default ItemOutput;
