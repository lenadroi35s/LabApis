import {
  CButton,
  CCol,
  CFormInput,
  CFormLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { actualizarDato, obtenerDatoPorId } from "../services/serviceslabs";

export default function ModalEdit({ visibleModa, setVisibleModal, data }) {
  const [dato, setDato] = useState(null);
  const [azucar, setAzucar] = useState("");
  const [grasa, setGraas] = useState("");
  const [oxigen, setOxigen] = useState("");

  useEffect(() => {
    obtenerDatoPorId(data)
      .then((datoObtenido) => {
        setDato(datoObtenido);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data]);

  const handleActualizar = () => {
    const nuevoDato = {
      azucar_porcentaje: azucar || dato?.azucar_porcentaje,
      grasa_porcentaje: grasa || dato?.grasa_porcentaje,
      oxygen_porcentaje: oxigen || dato?.oxygen_porcentaje,
    };
    actualizarDato(data, nuevoDato)
      .then(() => {
        setVisibleModal(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <CModal visible={visibleModa}>
        <CModalHeader>
          <CModalTitle>Editar datos </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol className="mt-2">
              <CFormLabel>Azucar</CFormLabel>
              <CFormInput
                defaultValue={dato?.azucar_porcentaje}
                onChange={(e) => {
                  setAzucar(e.target.value);
                }}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol className="mt-2">
              <CFormLabel>Grasa</CFormLabel>
              <CFormInput
                value={dato?.grasa_porcentaje}
                onChange={(e) => {
                  setGraas(e.target.value);
                }}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol className="mt-2">
              <CFormLabel>Oxigeno</CFormLabel>
              <CFormInput
                value={dato?.oxygen_porcentaje}
                onChange={(e) => {
                  setOxigen(e.target.value);
                }}
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol className="mt-2">
              <CFormLabel>Nivel de Riesgo</CFormLabel>
              <CFormInput value={dato?.nivel_riesgo} disabled />
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="secondary"
            onClick={() => {
              setVisibleModal(false);
            }}
          >
            Close
          </CButton>
          <CButton
            color="primary"
            onClick={() => {
              handleActualizar();
            }}
          >
            Guardar
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
}
