const init = () => {
    const jokeElem = document.getElementById('joke');
    const jokeBtn = document.getElementById('jokeBtn');

    jokeBtn.addEventListener('click', generateRandomJoke);

    async function generateRandomJoke() {
        const config  = {
            headers: {
                Accept: 'application/json',
            },
        }

        const res  = await fetch('https://icanhazdadjoke.com', config);

        const data = await res.json();
        jokeElem.innerHTML = data.joke;

    }
}

document.addEventListener('DOMContentLoaded', init)