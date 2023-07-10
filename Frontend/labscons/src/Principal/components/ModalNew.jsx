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
import React, { useState } from "react";
import { crearNuevoDato } from "../services/serviceslabs";

export default function ModalNew({ modalNew, setModalNew }) {
  const [azucar, setAzucar] = useState("");
  const [grasa, setGraas] = useState("");
  const [oxigen, setOxigen] = useState("");

  const handleCrearDato = () => {
    const nuevoDato = {
      azucar_porcentaje: azucar,
      grasa_porcentaje: grasa,
      oxygen_porcentaje: oxigen,
    };
    crearNuevoDato(nuevoDato)
      .then(() => {
        setModalNew(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <CModal visible={modalNew}>
        <CModalHeader>
          <CModalTitle>Enviar datos </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol className="mt-2">
              <CFormLabel>Azucar</CFormLabel>
              <CFormInput
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
                onChange={(e) => {
                  setOxigen(e.target.value);
                }}
              />
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="danger"
            className="fw-bold"
            onClick={() => {
              setModalNew(false);
            }}
          >
            Close
          </CButton>
          <CButton
            color="success"
            className="text-white fw-bold"
            onClick={() => {
              handleCrearDato();
            }}
          >
            Enviar
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
}
