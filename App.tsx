import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
  
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Notestate from './context/notes/notestate';
import Entry from './components/Entry';

const Stack = createNativeStackNavigator();

function App() {
  const [initialRoute, setInitialRoute] = useState('Home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        // console.warn('Token:', token); // Debug: Log token value
        if (token) {
          console.log('User is logged in with token:');
          setInitialRoute('Entry');
        } else {
          console.log('No token found, user is not logged in');
        }
      } catch (error) {
        console.error('Error checking token:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, []);

  if (isLoading) {
    return <View style={styles.containers}><Text style={styles.text}>Loading...</Text></View>; 
  }

  return (
    <Notestate>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Entry' component={Entry} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Notestate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containers: {
    marginTop: 400,
    alignItems: "center",
  },
  text: {
    fontSize: 30
  }
});

export default App;
