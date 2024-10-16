import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import notecontext from './notecontext';

const Notestate = props => {
  const [notes, setNotes] = useState([]);

  const listtodo = async () => {
    const token = await AsyncStorage.getItem('userToken');
    if (!token) {
      return;
    }

    try {
      const response = await fetch(
        `https://todo-web-7ntw.onrender.com/api/notes/fetchtodos`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': token,
          },
        },
      );
      const final = await response.json();

      if (final && final.notes) {
        setNotes(final.notes);
      } else {
        Alert.alert('Error', 'No notes found or invalid response.');
      }
    } catch (error) {
      Alert.alert('Error', 'Error fetching notes.');
    }
  };

  const addtodo = async (todo, priority) => {
    const token = await AsyncStorage.getItem('userToken');

    try {
      const response = await fetch(
        `https://todo-web-7ntw.onrender.com/api/notes/addtodo`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': token,
          },
          body: JSON.stringify({todo, priority}),
        },
      );
      const final = await response.json();
      listtodo();
    } catch (error) {
      Alert.alert('Error', 'Error adding todo.');
    }
  };

  const deletetodo = async id => {
    const token = await AsyncStorage.getItem('userToken');

    try {
      const response = await fetch(
        `https://todo-web-7ntw.onrender.com/api/notes/deletetodo/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': token,
          },
        },
      );

      if (response.ok) {
        const newnotes = notes.filter(note => note._id !== id);
        setNotes(newnotes);
      } else {
        Alert.alert('Error', 'Failed to delete the note.');
      }
    } catch (error) {
      Alert.alert('Error', 'Error deleting todo.');
    }
  };

  const searchtodo = async text => {
    const token = await AsyncStorage.getItem('userToken');

    try {
      const response = await fetch(
        `https://todo-web-7ntw.onrender.com/api/notes/search?text=${text}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': token,
          },
        },
      );
      const searchResponse = await response.json();

      if (response.ok) {
        setNotes(searchResponse);
      } else {
        Alert.alert('Error', 'No todos found.');
      }
    } catch (error) {
      Alert.alert('Error', 'Error searching todos.');
    }
  };

  useEffect(() => {
    listtodo();
  }, []);

  return (
    <notecontext.Provider
      value={{notes, setNotes, listtodo, addtodo, deletetodo, searchtodo}}>
      {props.children}
    </notecontext.Provider>
  );
};

export default Notestate;
