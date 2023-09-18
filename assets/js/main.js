import { fetchPokemonList, fetchPokemonDetails } from './pokeapi.js';

const pokemonList = await fetchPokemonList(20);

const renderPokemons = (pokemons) => {
  pokemons.forEach(async ({ name }) => {
    const pokemonDetails = await fetchPokemonDetails(name);
    pokemonContainer(pokemonDetails)
  });
};

const pokemonContainer = (details) => {

  const { id: numberPokedex, name, types, sprites: { other: { "official-artwork": { front_default } } } } = details;
  const listPokemons = document.querySelector('.pokemons');


  const liPokemon = document.createElement('li');
  liPokemon.className = 'pokemon';

  const spanNumber = document.createElement('span');
  spanNumber.className = 'number';
  spanNumber.textContent = `#${numberPokedex}`;

  const spanName = document.createElement('span');
  spanName.className = 'name';
  spanName.textContent = name;

  const divDetails = document.createElement('div');
  divDetails.className = 'detail';

  const olTypes = document.createElement('ol');
  olTypes.className = 'types';

  types.forEach(({ type }) => {
    const liType = document.createElement('li');
    liType.className = 'type';
    liType.textContent = type.name;

    olTypes.appendChild(liType);
  });
  // const liType = document.createElement('li');
  // liType.className = 'type';
  // liType.textContent = 'grass';

  // const liType2 = document.createElement('li');
  // liType2.className = 'type';
  // liType2.textContent = 'poison';

  // olTypes.appendChild(liType);
  // olTypes.appendChild(liType2);


  const imgPokemon = document.createElement('img');
  imgPokemon.src = front_default;
  imgPokemon.alt = name;

  divDetails.appendChild(olTypes);
  divDetails.appendChild(imgPokemon);

  liPokemon.appendChild(spanNumber);
  liPokemon.appendChild(spanName);
  liPokemon.appendChild(divDetails);

  listPokemons.appendChild(liPokemon);
}

renderPokemons(pokemonList);