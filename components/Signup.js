import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Navbar from './Navbar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height} = Dimensions.get('window');

const Signup = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signupnow = async () => {
    const response = await fetch(
      `https://todo-web-7ntw.onrender.com/api/user/signup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      },
    );
    const final = await response.json();
    if (final.token) {
      await AsyncStorage.setItem('userToken', final.token);
      props.navigation.navigate('Entry');
    } else {
      console.warn('Signup failed');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Navbar />
      </View>
      <View style={styles.two}>
        <Text style={styles.heading}>Signup</Text>
        <View style={styles.inner}>
          <Text style={styles.innerheading}>Email Address</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <Text style={styles.innerheading}>Passowrd</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <View style={styles.last}>
            <TouchableOpacity onPress={signupnow}>
              <Text style={styles.button}>Sigup Now!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  one: {
    height: height * 0.25,
    justifyContent: 'center',
    backgroundColor: '#44ab30',
  },
  two: {
    height: height * 0.75,
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
    marginTop: -20,
  },
  heading: {
    marginTop: height * 0.05,
    fontSize: 37.5,
    fontWeight: 'bold',
    color: '#44ab30',
    textAlign: 'center',
  },
  inner: {
    marginTop: height * 0.04,
  },
  innerheading: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  input: {
    borderColor: '#828182',
    borderWidth: 2,
    margin: 5,
    borderRadius: 5,
    fontSize: 20,
    width: 350,
    marginBottom: 15,
  },
  last: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#44ab30',
    padding: 10,
    borderRadius: 25,
    width: 350,
    marginTop: 12.5,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Signup;
