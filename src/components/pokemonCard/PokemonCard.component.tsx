import {IPokemon} from '../../interfaces/pokemon.interfaces';
import {Card, Text} from 'react-native-paper';
import {styles} from './PokemonCard.styles';
import {Image, View} from 'react-native';
import {FadeInImage} from '../fadeInImage/FadeInImage.component';

interface IPokemonCard {
  pokemon: IPokemon;
}

export const PokemonCard = ({pokemon}: IPokemonCard) => {
  return (
    <Card style={[styles.cardContainer]}>
      <Text style={styles.name} variant="bodyLarge" lineBreakMode="middle">
        {pokemon.name}
        {`\n# ${pokemon.id}`}
      </Text>
      <View style={styles.pokeballContainer}>
        <Image
          source={require('../../assets/pokeball.png')}
          style={styles.pokeball}
        />
      </View>
      <FadeInImage uri={pokemon.avatar} style={styles.pokemonImage} />
      <Text
        style={[styles.name, styles.mt]}
        variant="bodyLarge"
        lineBreakMode="middle">
        {pokemon.types[0]}
      </Text>
    </Card>
  );
};
