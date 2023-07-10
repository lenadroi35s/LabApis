import React, { useEffect, useState } from "react";
import {
  CButton,
  CCol,
  CContainer,
  CFormLabel,
  CRow,
  CTooltip,
} from "@coreui/react";
import { obtenerDatosSangre } from "./services/serviceslabs";
import DataTable from "react-data-table-component";
import { columns, customStyles } from "./components/DataTable";
import ModalEdit from "./components/ModalEdit";
import ModalDelete from "./components/ModalDelete";
import ModalNew from "./components/ModalNew";

export default function Main() {
  const [datos, setDatos] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalNew, setModalNew] = useState(false);
  const [idUp, setIdUp] = useState("");
  useEffect(() => {
    obtenerDatosSangre()
      .then((datosObtenidos) => {
        setDatos(datosObtenidos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const customSelector = (row) => (
    <>
      <CTooltip content="Editar">
        <CButton
          onClick={() => {
            setIdUp(row?.id);
            setModalEdit(!modalEdit);
          }}
        >
          Up
        </CButton>
      </CTooltip>
      <CTooltip content="Eliminar">
        <CButton
          color="danger"
          className="mx-2"
          onClick={() => {
            setIdUp(row?.id);
            setModalDelete(!modalDelete);
          }}
        >
          De
        </CButton>
      </CTooltip>
    </>
  );

  const customToolsColumn = [
    {
      name: "",
      selector: customSelector,
      width: "230px",
      center: true,
    },
  ];

  return (
    <CContainer>
      <CRow>
        <CFormLabel className="mt-4">
          Prueba Desarrollo Basado en Plataformas
        </CFormLabel>
      </CRow>
      <CRow>
        <CFormLabel className="mt-4">by Leandro Santana</CFormLabel>
      </CRow>
      <CRow>
        <CCol xs={4}>
          <CButton
            className="fw-bold"
            onClick={() => {
              setModalNew(!modalNew);
            }}
          >
            Crear uno nuevo
          </CButton>
        </CCol>
      </CRow>
      <CRow className="mt-5">
        <DataTable
          columns={customToolsColumn.concat(columns)}
          customStyles={customStyles}
          data={datos}
          responsive
          striped
          noDataComponent={"No se encontraron resultados."}
          persistTableHead
        />
      </CRow>
      <CRow>
        <ModalEdit
          visibleModa={modalEdit}
          setVisibleModal={setModalEdit}
          data={idUp}
        />
      </CRow>
      <CRow>
        <ModalDelete
          data={idUp}
          visibleModaDeletleModa={modalDelete}
          setVisibleModalDelet={setModalDelete}
        />
      </CRow>
      <CRow>
        <ModalNew modalNew={modalNew} setModalNew={setModalNew} />
      </CRow>
    </CContainer>
  );
}
