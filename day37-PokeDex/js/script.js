const container = document.getElementById('poke--container');
const count = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
const main_type = Object.keys(colors)

const fetchPokemonApi = async () => {
    for( let i = 1; i <= count; i++ ){
        await getPokemonCards( i )
    }
}

const getPokemonCards = async ( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch( url );
    const data = await response.json();
    createPokeCards( data );
}

const createPokeCards = ( pokemon ) => {
    const pElement = document.createElement('div');
    pElement.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice( 1 );
    const id = pokemon.id.toString().padStart( 3, '0');

    const poke_type = pokemon.types.map( type => type.type.name);
    const type = main_type.find( type => poke_type.indexOf(type) > -1 );
    const color = colors[ type ]
    pElement.style.background = color;

    const innerElement = `<div class="pokemon--container">
            <div class="img--container">
                <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
            </div>
            <div class="info">
                <span class="number">#${id}</span>
                <h3 class="name">${name}</h3>

                <small>
                    type: 
                    <span>${type}</span>
                </small>
            </div>
        </div>`;
        pElement.innerHTML =  innerElement ;
        container.appendChild( pElement );
}

fetchPokemonApi()