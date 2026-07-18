const tiendaVideojuegosFrases = [
  "¿Todavía aceptan juegos usados como parte de pago?",
  "¿A cuánto me tomas este FIFA de hace tres años?",
  "El juego base está en 60, pero por 10 más te llevas la edición de colección.",
  "Ese juego sale el próximo viernes, ¿quieres dejarlo reservado?",
  "Lo siento, amigo, la edición coleccionista se agotó en las preventas.",
  "¡En mis tiempos los juegos venían completos y no en DLC!",
  "¿Buscas el juego físico o te sirve una tarjeta de saldo digital?",
  "Asegúrate de tener espacio, porque el parche de día uno es enorme.",
  "No lo compres, en Metacritic le dieron una nota bajísima.",
  "Dicen que en consolas va a 30 FPS bloqueados.",
  "Prefiero comprarlo en físico, al menos así el juego de verdad es mío.",
  "¿Viene con el código para el contenido descargable o ya lo usaron?",
  "¿Te gustaría asegurar tu disco contra rayones por un dólar extra?",
  "Busco la versión con la portada holográfica, ¿la tienes?",
  "¿Este viene con el manual impreso o ya no traía nada?",
  "Vengo a ver si llegó algún juego raro de GameCube esta semana.",
  "Oye, ¿es verdad que le bajaron los gráficos respecto al tráiler?",
  "No te lleves ese, el multijugador está lleno de hackers.",
  "Le metieron micropagos hasta por respirar, paso completamente.",
  "Vengo a devolverlo... no tiene modo campaña.",
  "¡El parche de día uno pesa más que el juego!",
  "¡La preventa incluye un llavero de plástico!",
  "¡Contiene mecánicas de sorpresa!",
  "¡Se vende por separado!",
  "El juego es buenísimo, pero optimizaron la versión de PC con las patas.",
  "Viendo los precios retro, debí cuidar mejor mis cosas de niño.",
  "¿Este es el juego que causó la polémica en redes la semana pasada?",
  "¡Mi PC explota si abro este juego!"
];

const FirstPhrase = () => {
    const YText = document.getElementById("YellowText");
    YText.innerHTML = tiendaVideojuegosFrases[parseInt(Math.random()*tiendaVideojuegosFrases.length)];
;
}

//FirstPhrase();

function enviarWhatsApp() {
  const telefono = "584246729511"; // Código de país + número (sin el signo +)
  const mensaje = "Hola, este mensaje vino desde pedroyo games,";
  
  // Codificamos el mensaje para que sea válido en una URL
  const mensajeCodificado = encodeURIComponent(mensaje);
  
  // Creamos el enlace oficial de WhatsApp
  const url = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
  
  // Abrimos la pestaña de WhatsApp
  window.open(url, '_blank');
}

// Ejemplo de uso:
enviarWhatsApp();