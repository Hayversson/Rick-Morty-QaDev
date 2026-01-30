const API_URL = "https://rickandmortyapi.com/api/character";
const container = document.getElementById("characters");

async function fetchCharacters() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    renderCharacters(data.results);
  } catch (error) {
    container.innerHTML = "<p>Error al cargar personajes</p>";
  }
}

function renderCharacters(characters) {
  container.innerHTML = "";

  characters.forEach(character => {
    const score = getScore(character.id);

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <p>Estado: ${character.status}</p>
      <p>Especie: ${character.species}</p>
      <p>Puntaje: <span id="score-${character.id}">${score}</span></p>
      <button onclick="vote(${character.id}, 1)">👍 Like</button>
      <button onclick="vote(${character.id}, -1)">👎 Dislike</button>

    `;

    container.appendChild(card);
  });
}

function getScore(id) {
  return Number(localStorage.getItem(`score-${id}`)) || 0;
}

function vote(id, value) {
  const current = getScore(id);
  const newScore = current + value;
  localStorage.setItem(`score-${id}`, newScore);
  document.getElementById(`score-${id}`).innerText = newScore;
}

fetchCharacters();
