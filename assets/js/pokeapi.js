

export const fetchPokemonList = async (limit) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`;
  const response = await fetch(URL);
  const data = await response.json();
  const { results } = data;

  return results;
};

export const fetchPokemonDetails = async (namePokemon) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`;
  const response = await fetch(URL);
  const data = await response.json();
  
  return data;
};