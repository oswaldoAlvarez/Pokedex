// ReactotronConfig.js
import Reactotron from 'reactotron-react-native';

Reactotron.configure()
  .useReactNative() // incluye plugins de react-native, como console.log, async storage, etc.
  .connect();

// Opcional: Sobreescribir el console.log para que se muestre en Reactotron
console.tron = Reactotron;
console.log = Reactotron.log;

export default Reactotron;
