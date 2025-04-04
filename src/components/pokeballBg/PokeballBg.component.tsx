import {StyleProp, ImageStyle, Image} from 'react-native';
import {styles} from './PokeballBg.styles';

interface IPokeballBg {
  style?: StyleProp<ImageStyle>;
}

export const PokeballBg = ({style}: IPokeballBg) => {
  const pokeballImg = require('../../assets/pokeball.png');

  return <Image source={pokeballImg} style={[styles.pokeballBg, style]} />;
};
