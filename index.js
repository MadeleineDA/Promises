// Función para imprimir en pantalla
function mostrarMensaje(mensaje) {
  const log = document.getElementById("log");
  const item = document.createElement("li");
  item.textContent = mensaje;
  log.appendChild(item);
  log.scrollTop = log.scrollHeight;
}

// Función para preparar un platillo (con espera extra después de entregar)
function prepararPlatillo(platillo, tiempoPreparacion) {
  return new Promise((resolve) => {
    mostrarMensaje(`Comenzando a preparar: ${platillo}`);

    setTimeout(() => {
      mostrarMensaje(`${platillo} lista!`);

      setTimeout(() => {
        mostrarMensaje(`${platillo} entregando orden 🍽️...`);

        setTimeout(() => {
          mostrarMensaje(`${platillo} entregado ✅`);

          // 🔹 Espera 1 seg ANTES de pasar al siguiente
          setTimeout(() => {
            resolve(); // ahora sí continúa con el próximo
          }, 1000);

        }, 1000); // tiempo de "entregado"

      }, 1000); // tiempo de "entregando"

    }, tiempoPreparacion); // tiempo de preparación
  });
}

// Función principal (cadena de promesas)
function procesarOrden() {
  mostrarMensaje("Orden recibida - Iniciando proceso de preparación...");

  prepararPlatillo("Bebida 🥤", 2000)
    .then(() => prepararPlatillo("Pizza 🍕", 3000))
    .then(() => prepararPlatillo("Postre 🧁", 4000))
    .then(() => mostrarMensaje("🎉 ¡La orden completa ha sido entregada!"))
    .catch((error) => mostrarMensaje("❌ Error en la preparación: " + error));
}

// Botón para iniciar
document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("log").innerHTML = ""; // limpiar logs
  procesarOrden();
});