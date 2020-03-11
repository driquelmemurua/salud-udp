import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  Menu,
  Contactos,
  Direcciones,
  Escuela,
  Instructivos,
  Sugerencias,
  Accidentes,
  Flujograma,
  Direccion,
  Documento,
  Video
} from './views';
import { CONTENT_VIEWS, DIRECCION_VIEWS } from './constants';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

//redux
const store = createStore(reducer);
//navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ContentNavigation() {
  return (
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
        name={CONTENT_VIEWS[0].name}
        component={Contactos}
      />
      <Stack.Screen
        name={CONTENT_VIEWS[1].name}
        component={Direcciones}
      />
      <Stack.Screen
        name={CONTENT_VIEWS[2].name}
        component={Instructivos}
      />
      <Stack.Screen
        name={CONTENT_VIEWS[3].name}
        component={Sugerencias}
      />
      <Stack.Screen
        name={CONTENT_VIEWS[4].name}
        component={Escuela}
      />
      <Stack.Screen
        name={DIRECCION_VIEWS[0].name}
        component={Direccion}
      />
      <Stack.Screen
        name={'Documento'}
        component={Documento}
      />
      <Stack.Screen
        name={'Vídeo'}
        component={Video}
      />
    </Stack.Navigator>
  );
}

function AccidentsNavigation() {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
      <Stack.Screen
        name={'Accidentes'}
        component={Accidentes}
      />
      <Stack.Screen
        name={'Flujograma'}
        component={Flujograma}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <Provider store={ store }>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeBackgroundColor: '#196E6E',
            inactiveBackgroundColor: '#196E6E',
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#C3C4C0',
            style: {
              borderTopWidth: 0,
            }
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'ACCIDENTES') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'CONTENIDO') {
                iconName = 'md-menu';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="CONTENIDO" component={ContentNavigation} />
          <Tab.Screen name="ACCIDENTES" component={AccidentsNavigation} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
