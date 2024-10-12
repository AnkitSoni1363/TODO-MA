import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import notecontext from './notecontext';

const Notestate = props => {
  const [notes, setNotes] = useState([]);

  const listtodo = async () => {
    const token = await AsyncStorage.getItem('userToken');
    if (!token) {
      // console.warn('No token found, access denied.');
      return;
    }

    try {
      const response = await fetch(
        `https://todo-web-3.onrender.com/api/notes/fetchtodos`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': token,
          },
        },
      );
      const final = await response.json();
      // console.warn('Fetched notes:', final);

      if (final && final.notes) {
        setNotes(final.notes);
      } else {
        console.warn('No notes found or invalid response');
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const addtodo = async (todo, priority) => {
    const token = await AsyncStorage.getItem('userToken');

    try {
      const response = await fetch(
        `https://todo-web-3.onrender.com/api/notes/addtodo`,
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
      // console.warn(final);
      listtodo();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const deletetodo = async id => {
    const token = await AsyncStorage.getItem('userToken');

    try {
      const response = await fetch(
        `https://todo-web-3.onrender.com/api/notes/deletetodo/${id}`,
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
        // console.warn('Note deleted:', id);
      } else {
        console.warn('Failed to delete the note');
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  useEffect(() => {
    listtodo();
  }, []);

  return (
    <notecontext.Provider
      value={{notes, setNotes, listtodo, addtodo, deletetodo}}>
      {props.children}
    </notecontext.Provider>
  );
};

export default Notestate;
