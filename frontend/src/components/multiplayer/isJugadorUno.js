export function isJugadorUno(usuarioFront, usuarioJuego){
  return usuarioFront.email === usuarioJuego.email && usuarioFront.nombre_usuario === usuarioJuego.nombre_usuario
}
