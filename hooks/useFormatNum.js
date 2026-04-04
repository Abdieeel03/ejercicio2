export function useFormatNum() {
  const formatoNum = (num) =>
    (num || 0).toLocaleString("es-PE", {
      style: "currency",
      currency: "PEN",
    });
  return { formatoNum };
}
