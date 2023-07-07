const Setup = document.querySelector('.generator-setup');
const Punchline = document.querySelector('.generator-punchline');
const btn = document.querySelector('.generator-btn');
const url = 'https://v2.jokeapi.dev/joke/Programming';


async function generateJoke() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Opps! Something went wrong...');
    const {setup,delivery} = await res.json();
    Setup.textContent = setup;
    Punchline.textContent = delivery;
  } catch ({message}) {
    alert(message);
  }
}

btn.addEventListener('click',generateJoke,false);