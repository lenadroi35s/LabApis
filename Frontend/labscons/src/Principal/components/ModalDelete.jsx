import {
  CButton,
  CFormLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import React from "react";
import { eliminarDato } from "../services/serviceslabs";

export default function ModalDelete({
  visibleModaDeletleModa,
  setVisibleModalDelet,
  data,
}) {
  const handleEliminar = () => {
    eliminarDato(data)
      .then(() => {
        setVisibleModalDelet(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <CModal visible={visibleModaDeletleModa}>
        <CModalHeader>
          <CModalTitle>Seguro de eliminar </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CFormLabel> Esta de seguro eliminar esta id#{data}</CFormLabel>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="danger"
            className="fw-bold"
            onClick={() => {
              handleEliminar();
            }}
          >
            Eliminar
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
}
