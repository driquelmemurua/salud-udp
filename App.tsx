import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Menu, Contactos, Direcciones, Escuela, Instructivos, Sugerencias } from './views';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name={'Menu'}
          component={Menu}
        />
        <Stack.Screen
          name={'Cambiar Escuela'}
          component={Escuela}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
