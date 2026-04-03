import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <HomeScreen />
    </SafeAreaProvider>
  );
}

/*
function HomeScreen() {
  const [refacciones, setRefacciones] = useState(0);
  const [servicio, setServicio] = useState(0);
  const [vehiculos, setVehiculos] = useState(0);
  const [total, setTotal] = useState(0);
  const [promedio, setPromedio] = useState(0);
  const [resultado, setResultado] = useState("");
  const [display, setDisplay] = useState(false);
  const importeTotal = (refacciones, servicio, vehiculos) => {
    const total =
      parseInt(refacciones) + parseInt(servicio) + parseInt(vehiculos);
    setTotal(total);
    const promedio = total / 3;
    setPromedio(Math.round(promedio));
    promedio >= 500000
      ? setResultado("Se alcanzó el objetivo")
      : setResultado("Buscar nuevas estrategias de venta");
    setDisplay(true);
  };
}
*/
