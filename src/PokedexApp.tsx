import '../ReactotronConfig';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './navigator/Stacknavigator';
import {PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const queryClient = new QueryClient();

export const PokedexApp = () => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
              <StackNavigator />
            </NavigationContainer>
          </SafeAreaView>
        </PaperProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};
