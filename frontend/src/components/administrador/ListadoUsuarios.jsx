import React from "react";
import { getAllUsuarios } from "../../core/services/usuarios";
import TablaUsuarios from "./TablaUsuarios";
import {useAsyncRetry} from 'react-use';

const ListadoUsuarios = () => {
    const { loading, error, value, retry } = useAsyncRetry(getAllUsuarios, []);
    const rows = value?.data?.map(x => ({
        id: x.numero,
        username: x.nombre_usuario,
        firstName: x.nombre,
        lastName: x.apellido
      })) ?? []

    return <TablaUsuarios loading={loading} values={loading ? [] : rows} retry={retry}/>
}

export default ListadoUsuarios;