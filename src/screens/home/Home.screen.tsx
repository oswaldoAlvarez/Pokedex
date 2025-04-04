import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

export const Home = () => {
  console.log('hola');

  return (
    <View>
      <Text>Home</Text>

      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </View>
  );
};
