import {FlatList, View} from 'react-native';
import {usePokemonsInfo} from '../../hooks/useGetPokemons';
import {PokeballBg} from '../../components/pokeballBg/PokeballBg.component';
import {styles} from './Home.styles';
import {Text} from 'react-native-paper';
import {PokemonCard} from '../../components/pokemonCard/PokemonCard.component';

const ListHeader = () => (
  <Text variant="displayMedium" style={styles.mb}>
    Pokedex
  </Text>
);

export const Home = () => {
  console.log('hola');

  const {pokemons, loading} = usePokemonsInfo();

  console.log(JSON.stringify(pokemons, 0, 4));

  return (
    <View>
      <PokeballBg style={styles.imgPosition} />
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        style={styles.flatlist}
        ListHeaderComponent={ListHeader}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        numColumns={2}
      />
    </View>
  );
};
