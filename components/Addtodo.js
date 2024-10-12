import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Navbar from './Navbar';
import notecontext from '../context/notes/notecontext';

const {height} = Dimensions.get('window');

const Addtodo = () => {
  const [todo, setTodo] = useState('');
  const [priority, setPriority] = useState('High');

  const {addtodo} = useContext(notecontext);

  const handleAddTodo = () => {
    if (todo.trim() === '') {
      alert('Please enter a todo item');
      return;
    }
    addtodo(todo, priority);
    setTodo('');
    setPriority('High');
  };

  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Navbar />
      </View>
      <View style={styles.two}>
        <Text style={styles.heading}>Addtodo</Text>
        <View style={styles.inner}>
          <Text style={styles.innerheading}>To-Do</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setTodo(text)}
            value={todo}
          />
          <Text style={styles.innerheading}>Priority</Text>
          <TouchableOpacity onPress={() => setPriority('High')}>
            <View style={styles.radiorow}>
              <View style={styles.radio}>
                {priority === 'High' ? <View style={styles.radiobg} /> : null}
              </View>
              <Text style={styles.radiotext}> - High</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setPriority('Medium')}>
            <View style={styles.radiorow}>
              <View style={styles.radio}>
                {priority === 'Medium' ? <View style={styles.radiobg} /> : null}
              </View>
              <Text style={styles.radiotext}> - Medium</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setPriority('Low')}>
            <View style={styles.radiorow}>
              <View style={styles.radio}>
                {priority === 'Low' ? <View style={styles.radiobg} /> : null}
              </View>
              <Text style={styles.radiotext}> - Low</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.last}>
            <TouchableOpacity onPress={handleAddTodo}>
              <Text style={styles.button}>Add TO-DO</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  inner: {
    marginTop: height * 0.04,
  },
  innerheading: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 3,
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
  radiorow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  radio: {
    height: 20,
    width: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
  },
  radiotext: {
    fontSize: 20,
    alignItems: 'center',
    color: 'black',
  },
  radiobg: {
    backgroundColor: 'black',
    height: 13,
    width: 13,
    borderRadius: 6.5,
    margin: 1.5,
  },
  last: {
    alignItems: 'center',
    marginTop: 15,
  },
  button: {
    backgroundColor: '#44ab30',
    padding: 10,
    borderRadius: 25,
    width: 350,
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Addtodo;
