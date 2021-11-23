import React from "react";
import { getAllUsuarios } from "../../core/services/usuarios";
import { useFetch } from "../../hooks/useFetch";
import TablaUsuarios from "./TablaUsuarios";

const ListadoUsuarios = () => {
    const { isLoading, values } = useFetch(null, getAllUsuarios)
    return <TablaUsuarios loading={isLoading} values={isLoading ? [] : values}/>
}

export default ListadoUsuarios;