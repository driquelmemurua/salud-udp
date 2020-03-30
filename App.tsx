import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
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
import { createStore } from 'redux';
import { CONTENT_VIEWS, DIRECCION_VIEWS } from './constants';
import reducer from './reducers';
import { API_URI } from './constants';

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

const loadData = async (uri) => {
  try {
    const { data } = await axios.get(uri);
    if(data){
      await AsyncStorage.setItem('accidentes', JSON.stringify(data.accidentes));
      await AsyncStorage.setItem('contactos', JSON.stringify({ contactos: data.contactos, emergencias: data.emergencias }));
      await AsyncStorage.setItem('direcciones', JSON.stringify(data.direcciones));
      await AsyncStorage.setItem('instructivos', JSON.stringify(data.instructivos));
    }
  } catch (error) {
    console.log(error)
  }
};

function App() {
  loadData(API_URI);

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
