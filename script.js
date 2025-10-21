const jokeBox = document.getElementById('joke-box');
const button = document.getElementById('joke-button');

const API_URL = 'https://backend-carambar-jokes.onrender.com/api/v1/blagues/random';

async function fetchJoke() {
  try {
    jokeBox.textContent = 'Chargement...';
    const response = await fetch(API_URL);
    const data = await response.json();
    jokeBox.textContent = data.content || 'Oops ! Blague non trouvée.';
  } catch (error) {
    jokeBox.textContent = 'Erreur de connexion à l’API.';
    console.error(error);
  }
}

button.addEventListener('click', fetchJoke);
