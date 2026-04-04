import { View, Text, TextInput, StyleSheet } from "react-native";

export function InputField({ label, placeholder, value, onChangeText }) {
  const handleChange = (text) => {
    const limpio = text.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");

    onChangeText(limpio);
  };

  return (
    <View style={styles.divInput}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="numeric"
        value={value}
        onChangeText={handleChange}
        placeholderTextColor="#aaa"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  divInput: {
    width: "80%",
    marginTop: 20,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    color: "#ccc",
  },
  input: {
    height: 45,
    borderColor: "#888",
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: "#1e1e1e",
    color: "white",
  },
});
