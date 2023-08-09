import { Pressable, StyleSheet, View, Text } from "react-native";

function Button({ children, mode, onPress, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flatText]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
export default Button;
const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: '#3e04c3',
      },
      flat: {
        backgroundColor: 'transparent',
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
      },
      flatText: {
        color: '#a281f0',
      },
      pressed: {
        opacity: 0.75,
        backgroundColor: '#c6affc',
        borderRadius: 4,
      },
});
