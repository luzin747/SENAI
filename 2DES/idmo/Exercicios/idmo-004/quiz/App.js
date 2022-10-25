import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import result from './src/pages/Resultado'
import Home from './src/pages/Home';
import q2 from './src/pages/q2';
import q3 from './src/pages/q3';
import q4 from './src/pages/q4';
import q5 from './src/pages/q5';


const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pergunta 01" component={Home} />
        <Stack.Screen name="Pergunta 02" component={q2} />
        <Stack.Screen name="Pergunta 03" component={q3} />
        <Stack.Screen name="Pergunta 04" component={q4} />
        <Stack.Screen name="Pergunta 05" component={q5} />
        <Stack.Screen name="Resultado" component={result} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;