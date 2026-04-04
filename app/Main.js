import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useVentas } from "../hooks/useVentas";

export default function Main() {
  const { datos, setDatos, resultados, setResultados, calcular } = useVentas();
  const { total, promedio, resultado } = resultados;

  const limpiar = () => {
    setDatos({
      refacciones: "",
      servicio: "",
      vehiculos: "",
    });

    setResultados({
      total: 0,
      promedio: 0,
      resultado: "",
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Calcular promedio de ventas</Text>
      <View style={{ width: "100%", alignItems: "center", marginBottom: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese importe de ventas de refacciones"
          keyboardType="numeric"
          value={datos.refacciones}
          onChangeText={(refacciones) =>
            setDatos({ ...datos, refacciones: refacciones })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese importe de ventas de servicio"
          keyboardType="numeric"
          value={datos.servicio}
          onChangeText={(servicio) =>
            setDatos({ ...datos, servicio: servicio })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese importe de ventas de autos y camiones"
          keyboardType="numeric"
          value={datos.vehiculos}
          onChangeText={(vehiculos) =>
            setDatos({ ...datos, vehiculos: vehiculos })
          }
        />
      </View>
      {resultado !== "" && (
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <Text style={styles.textResultado}>Total: {total.toFixed(2)}</Text>
          <Text style={styles.textResultado}>
            Promedio: {promedio.toFixed(2)}
          </Text>
          <Text
            style={[
              styles.textResultado,
              {
                marginTop: 10,
                color: resultado.includes("alcanzó") ? "#0f0" : "#f00",
              },
            ]}
          >
            {resultado}
          </Text>
        </View>
      )}
      <View style={{ flexDirection: "row", gap: 20 }}>
        <Pressable
          style={({ pressed }) => [
            styles.boton,
            { backgroundColor: pressed ? "#005BBB" : "#007AFF" },
          ]}
          onPress={calcular}
        >
          <Text style={{ color: "#fff" }}>Calcular</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.boton,
            { backgroundColor: pressed ? "#bb0000" : "#007AFF" },
          ]}
          onPress={limpiar}
        >
          <Text style={{ color: "#fff" }}>Limpiar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 10,
  },
  textResultado: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  input: {
    height: 40,
    borderColor: "#aaa",
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
    width: "80%",
    borderRadius: 10,
    backgroundColor: "#555",
    color: "white",
  },
  boton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    marginTop: 20,
  },
});
