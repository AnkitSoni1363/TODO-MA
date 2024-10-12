import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Navbar from './Navbar';

const {height} = Dimensions.get('window');

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Navbar />
      </View>
      <View style={styles.two}>
        <View style={styles.middle}>
          <TouchableOpacity
            style={styles.buttonContainer1}
            onPress={() => props.navigation.navigate('Signup')}>
            <Text style={styles.exactbutton1}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer1}
            onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.exactbutton2}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

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
  },
  buttonContainer1: {
    marginVertical: 10,
  },
  exactbutton1: {
    backgroundColor: '#3399FF',
    height: 37,
    width: 200,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 20,
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
});

export default Home;
