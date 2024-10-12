import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Navbar = () => {
  return (
    <View>
      <Text style={styles.heading}>TO-DO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#44ab30',
  },
});

export default Navbar;
