import React from "react";
import { getAllUsuarios } from "../../core/services/usuarios";
import TablaUsuarios from "./TablaUsuarios";
import { useAsyncRetry } from 'react-use';
import { mapDataToTablaUsuarios } from "./mapDataToTablaUsuarios";

const ListadoUsuarios = () => {
  const { loading, error, value, retry } = useAsyncRetry(getAllUsuarios, []);

  return !loading && !error && <TablaUsuarios values={mapDataToTablaUsuarios(value)} retry={retry} />
}

export default ListadoUsuarios;
