export function mapDataToTablaUsuarios(value) {
  return value.data.map(x => {
    return {
      id: x.numero,
      username: x.nombre_usuario,
      firstName: x.nombre,
      lastName: x.apellido
    }
  })
}
