import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Calcular promedio de ventas</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese importe de ventas de refacciones"
        onChangeText={setRefacciones}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese importe de ventas de servicio"
        onChangeText={setServicio}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese importe de ventas de autos y camiones"
        onChangeText={setVehiculos}
      />
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          display: display ? "flex" : "none",
        }}
      >
        <Text>Total: {total}</Text>
        <Text>Promedio: {promedio}</Text>
        <Text
          style={{
            color: resultado === "Se alcanzó el objetivo" ? "green" : "red",
          }}
        >
          {resultado}
        </Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.boton,
          { backgroundColor: pressed ? "#005BBB" : "#007AFF" },
        ]}
        onPress={() => importeTotal(refacciones, servicio, vehiculos)}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Calcular</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    width: "80%",
  },
  boton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
