export const customStyles = {
  rows: {
    style: {
      fontSize: "1rem",
      minHeight: "58px",
    },
  },
  headCells: {
    style: {
      fontSize: "1rem",
      paddingLeft: "1rem",
      borderStyle: "solid",
      borderColor: "#dee2e6",
      borderWidth: "1px",
      fontWeight: "bold",
    },
  },
  cells: {
    style: {
      fontSize: "1rem",
      paddingLeft: "1rem",
      borderStyle: "solid",
      borderColor: "#dee2e6",
      borderWidth: "1px",
    },
  },
};
export const columns = [
  { name: "id", selector: (row) => row.id, center: true },
  {
    name: "Porcentaje de azucar ",
    selector: (row) => row.azucar_porcentaje,
    center: true,
  },
  {
    name: "Porcentaje de grasa",
    selector: (row) => row.grasa_porcentaje,
    center: true,
  },
  {
    name: "Porcentaje de oxygeno",
    selector: (row) => row.oxygen_porcentaje,
    center: true,
  },
  {
    name: "Nivel de Riesgo",
    selector: (row) => row.nivel_riesgo,
    center: true,
  },
];
