import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pizzas from './src/pages/Pizzas';
import Carrinho from './src/pages/Carrinho';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pizzaria Renas" component={Pizzas} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;