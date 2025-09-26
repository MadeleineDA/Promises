 //funcion para mostrar mensajes en el log
 function mostrarMensaje(mensaje) {
    const log = document.getElementById("log");
    const li = document.createElement("li");
    li.textContent = mensaje;
    log.appendChild(li);
    console.log(mensaje);
    log.scrollTop = log.scrollHeight;
  }

  
  function esperar(milisegundo) {
    return new Promise(resolve => setTimeout(resolve, milisegundo));
  }

  // Función para preparar un platillo con sus etapas
  async function prepararPlatillo(nombre) {
    mostrarMensaje(`Iniciando preparación: ${nombre}`);
    await esperar(2000);

    mostrarMensaje(`✅ ${nombre} listo`);
    await esperar(1000);

    mostrarMensaje(`🚚 Entregando ${nombre}...`);
    await esperar(2000);

    mostrarMensaje(`🍽️ ${nombre} entregado`);
  }

  // Función principal
  async function procesarOrden() {
    mostrarMensaje("📋 Orden recibida: Bebida, Pizza y Postre");

    // Probabilidad de fallo de toda la orden (70%)
    if (Math.random() < 0.7) {
      mostrarMensaje("❌ Ha ocurrido un problema y toda la orden no pudo completarse.");
      return; // termina la función
    }

    // Si no falla, se preparan los platillos secuencialmente
    try {
      await prepararPlatillo("Bebida");
      await prepararPlatillo("Pizza");
      await prepararPlatillo("Postre");

      mostrarMensaje("🎉 La orden completa ha sido entregada.");
    } catch (error) {
      // Esto es solo por si ocurre algún error inesperado
      mostrarMensaje("❌ Error inesperado: " + error.message);
    }
  }

  document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("log").innerHTML = "";
    procesarOrden();
  });