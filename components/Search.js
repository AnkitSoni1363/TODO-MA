import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import notecontext from '../context/notes/notecontext';
import Listtodo from './Listtodo';

const Search = () => {
  const {searchnote, listtodo} = useContext(notecontext); // Use listtodo instead of getnotes
  const [notes, setNotes] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // Manage input state

  useEffect(() => {
    listtodo(); // Fetch initial notes using listtodo
  }, [listtodo]); // Add listtodo to dependency array

  const onChange = text => {
    setSearchQuery(text); // Update search query state

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        if (text.trim() === '') {
          listtodo(); // Fetch all notes again when input is empty
        } else {
          searchnote(text).then(searchResults => setNotes(searchResults));
        }
      }, 500),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.searchLabel}>Search</Text>
        <TextInput
          placeholder="Enter your task"
          onChangeText={onChange} // Use onChangeText prop
          value={searchQuery} // Controlled component
          style={styles.input}
        />
      </View>
      <View style={styles.listContainer}>
        <Listtodo notes={notes} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    width: '75%',
  },
  searchLabel: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#828182',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    width: '100%',
    marginTop: 10,
    padding: 10,
  },
  listContainer: {
    marginTop: 20,
    width: '100%',
  },
});

export default Search;
