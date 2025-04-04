import {useQuery} from '@tanstack/react-query';
import {
  IPokeApiPaginatedResponse,
  IPokeAPIPokemon,
  IPokemon,
} from '../interfaces/pokemon.interfaces';
import {pokeApi} from '../api/pokeApi';
import {pokeApiPokemonToEntity} from '../api/pokemon.mapper';

const fetchPokemons = async (
  page: number,
  limit: number = 20,
): Promise<IPokemon[]> => {
  try {
    const url = `/pokemon?offset=${page * 10}&limit=${limit}`;
    const {data} = await pokeApi.get<IPokeApiPaginatedResponse>(url);

    const pokemonPromises = data.results.map(info => {
      return pokeApi.get<IPokeAPIPokemon>(info.url);
    });

    const pokeApiPokemons = await Promise.all(pokemonPromises);

    const pokemons = pokeApiPokemons.map(item =>
      pokeApiPokemonToEntity(item.data),
    );

    return pokemons;
  } catch (error) {
    throw new Error('Error getting pokemons');
  }
};

export const usePokemonsInfo = () => {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery<IPokemon[], Error>({
    queryKey: ['pokemons'],
    queryFn: () => fetchPokemons(0),
    staleTime: 1000 * 60 * 60,
  });

  return {
    pokemons: data,
    loading: isLoading,
    isError,
    error,
  };
};
