import React, {useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Navbar from './Navbar';
import notecontext from '../context/notes/notecontext';
import Icon from 'react-native-vector-icons/Ionicons';

const {height} = Dimensions.get('window');

const Listtodo = () => {
  const {notes, listtodo, deletetodo} = useContext(notecontext);

  useEffect(() => {
    listtodo();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Navbar />
      </View>
      <View style={styles.two}>
        <Text style={styles.heading}>All TO-DO</Text>
        <ScrollView>
          {notes.length > 0 ? (
            notes.map(item => (
              <View key={item._id} style={styles.data}>
                <View style={styles.todoContainer}>
                  <Text style={styles.innerdata1}>{item.priority}</Text>
                  <TouchableOpacity onPress={() => deletetodo(item._id)}>
                    <Icon name="trash-bin" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <View style={styles.divider} />
                <Text style={styles.innerdata2}>{item.todo}</Text>
              </View>
            ))
          ) : (
            <View style={styles.notodocontainer}>
              <Text style={styles.notodo}>
                No more todos left! You're all set!
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: '#44ab30',
  },
  one: {
    height: height * 0.1,
    justifyContent: 'center',
  },
  two: {
    height: height * 0.9,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    marginTop: height * 0.05,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#44ab30',
    textAlign: 'center',
  },
  data: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 100,
    width: 400,
    flexDirection: 'column',
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerdata1: {
    fontSize: 20,
    color: 'black',
    marginLeft: 5,
  },
  innerdata2: {
    fontSize: 22.5,
    color: 'black',
    marginLeft: 5,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
    marginVertical: 5,
  },
  notodocontainer: {
    marginTop: height * 0.06,
  },
  notodo: {
    fontSize: 27,
    color: '#696969',
  },
});

export default Listtodo;
