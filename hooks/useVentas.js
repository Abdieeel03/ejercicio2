import { useState } from "react";

export function useVentas() {
  const [datos, setDatos] = useState({
    refacciones: "",
    servicio: "",
    vehiculos: "",
  });
  const [resultados, setResultados] = useState({
    total: 0,
    promedio: 0,
    resultado: "",
  });
  const calcular = () => {
    const { refacciones, servicio, vehiculos } = datos;
    const total =
      parseFloat(refacciones) + parseFloat(servicio) + parseFloat(vehiculos);
    const promedio = total / 3;
    const resultado =
      promedio >= 500000
        ? "Se alcanzó el objetivo"
        : "Buscar nuevas estrategias de venta";
    setResultados({ total, promedio, resultado });
  };
  return { datos, setDatos, resultados, setResultados, calcular };
}
