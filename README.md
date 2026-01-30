# Visor de Personajes - Rick and Morty

## Descripción
Aplicación web que consume la API pública de Rick and Morty para mostrar una galería de personajes y permitir la interacción mediante votos de Like y Dislike.

Este proyecto fue desarrollado como parte de una prueba técnica para el rol de Aprendiz en Desarrollo QA/Dev en CubiQ se usó funciones, fetch, DOM y localstorage.

## Ejecución del proyecto
1. Clonar el repositorio:
git clone <github.com/Hayversson/Rick-Morty-QaDev.git>

2. Abrir el archivo `index.html` en el navegador.
No se necesita dependecias.

## Consumo de la API
La aplicación consume la API pública:

https://rickandmortyapi.com/api/character

Se realiza una petición `fetch` para obtener los personajes y renderizarlos dinámicamente en la interfaz.

## Estructura del proyecto
rick-morty-qa-app/
│
├── index.html
├── styles.css
├── app.js
├── README.md
└── docs/
└── pruebas-funcionales.md

## Funcionalidades
- Visualización de personajes en formato grid
- Información del personaje (imagen, nombre, estado, especie)
- Votos de Like y Dislike
- Puntaje por personaje
- Persistencia de votos usando localStorage
- Diseño responsive básico

## Decisiones técnicas
- Se utilizó HTML, CSS y JavaScript puro para mantener la aplicación simple y fácil de ejecutar.
- El uso de localStorage permite persistir los votos sin necesidad de un backend.
- Se manejan errores básicos en caso de falla de la API.

## Funcionalidades adicionales
- Persistencia local de votos
- Responsive design

## Propuestas de mejora
- Implementar paginación para manejar grandes volúmenes de personajes.
- Agregar filtros por nombre, estado o especie.
- Integrar información de episodios por personaje.
- Mejorar la experiencia visual con animaciones.
