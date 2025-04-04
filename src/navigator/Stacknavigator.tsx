import {createStackNavigator} from '@react-navigation/stack';
import {Home, Pokemon, Search} from '../screens';

export type RootStackParams = {
  Home: undefined;
  Pokemon: {pokemonId: number};
  Search: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Pokemon" component={Pokemon} />
    <Stack.Screen name="Search" component={Search} />
  </Stack.Navigator>
);
