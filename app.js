// URL base de la API pública de Rick and Morty
const API_URL = "https://rickandmortyapi.com/api/character";

// Contenedor donde se renderizan los personajes
const container = document.getElementById("characters");

// Función principal para obtener personajes desde la API
async function fetchCharacters() {
  try {
    // Petición HTTP a la API
    const response = await fetch(API_URL);

    // Conversión de la respuesta a JSON
    const data = await response.json();

    // Renderizar los personajes obtenidos
    renderCharacters(data.results);
  } catch (error) {
    // Manejo de error en caso de que falle la API
    container.innerHTML = "<p>Error al cargar personajes</p>";
  }
}

// Función encargada de mostrar los personajes en pantalla
function renderCharacters(characters) {
  // Limpia el contenedor antes de renderizar
  container.innerHTML = "";

   // Recorre cada personaje
  characters.forEach(character => {
    // Obtiene el puntaje guardado del personaje
    const score = getScore(character.id);

    // Crea la tarjeta del personaje
    const card = document.createElement("div");
    card.className = "card";

    // Contenido dinámico de la tarjeta
    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <p>Estado: ${character.status}</p>
      <p>Especie: ${character.species}</p>
      <p>Puntaje: <span id="score-${character.id}">${score}</span></p>
      <button onclick="vote(${character.id}, 1)">👍 Like</button>
      <button onclick="vote(${character.id}, -1)">👎 Dislike</button>

    `;

    // Agrega la tarjeta al contenedor principal
    container.appendChild(card);
  });
}

// Obtiene el puntaje desde localStorage
function getScore(id) {
  // Convierte el valor a número, si no existe retorna 0
  return Number(localStorage.getItem(`score-${id}`)) || 0;
}

// Función que maneja el voto de like o dislike
function vote(id, value) {

  // Obtiene el puntaje actual
  const current = getScore(id);

  // Calcula el nuevo puntaje
  const newScore = current + value;

  // Guarda el puntaje actualizado en localStorage
  localStorage.setItem(`score-${id}`, newScore);

  // Actualiza el puntaje en la interfaz
  document.getElementById(`score-${id}`).innerText = newScore;
}

// Llamada inicial para cargar los personajes
fetchCharacters();
