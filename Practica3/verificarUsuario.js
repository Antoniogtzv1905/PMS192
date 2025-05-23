
function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
      if (usuario === "Ivan") {
        resolve("Acceso concedido");
      } else {
        reject("Acceso denegado");
      }
    });
  }
  
  // Pruebas
  
  
  verificarUsuario("Ivan")
    .then(res => console.log(res))
    .catch(err => console.error(err));  