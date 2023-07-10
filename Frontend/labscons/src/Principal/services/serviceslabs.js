import axios from "axios";

export const crearNuevoDato = async (nuevoDato) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/sangre-data/",
      nuevoDato
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const obtenerDatosSangre = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/sangre-data/");
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const actualizarDato = async (id, nuevoDato) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/api/sangre-data/${id}/`,
      nuevoDato
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const obtenerDatoPorId = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/sangre-data/${id}/`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const eliminarDato = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/api/sangre-data/${id}/`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
