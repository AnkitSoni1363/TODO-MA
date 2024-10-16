import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Navbar from './Navbar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height} = Dimensions.get('window');

const Logout = ({navigation}) => {
  const logout = async () => {
    await AsyncStorage.removeItem('userToken');
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Navbar />
      </View>
      <View style={styles.two}>
        <View style={styles.middle}>
          <TouchableOpacity style={styles.buttonContainer1} onPress={logout}>
            <Text style={styles.exactbutton2}>Logout</Text>
          </TouchableOpacity>
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
  middle: {
    alignItems: 'center',
    marginTop: height * 0.3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 325,
  },
  buttonContainer1: {
    marginVertical: 10,
  },
  exactbutton2: {
    backgroundColor: '#44ab30',
    height: 37,
    width: 200,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 20,
  },
  developer: {
    fontSize: 22.5,
    fontWeight: 'bold',
    color: '#44ab30',
  },
});

export default Logout;
