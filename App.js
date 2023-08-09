import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import { Ionicons } from "@expo/vector-icons";
import ButtonIcon from "./UI/ButtonIcon";
import ManageScreen from "./screens/ManageScreen";
import ItemContextProvider from "./store/itemContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ItemContextProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="login"
          component={Login}
        />
        <Stack.Screen name="manageScreen" component={ManageScreen} />
        <Stack.Screen
          name="home"
          component={Home}
          options={({ navigation }) => ({
            headerRight: ({ tintColor }) => (
              <ButtonIcon
                icon="add"
                size={24}
                color={tintColor}
                onPress={() => {
                  navigation.navigate("manageScreen");
                }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </ItemContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
