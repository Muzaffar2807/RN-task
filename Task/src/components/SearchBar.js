import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Octicons';

const SearchBar = ({onSearch}) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={18} color="#fff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search Products or store"
          placeholderTextColor="#8891A5"
          value={query}
          onChangeText={text => setQuery(text)}
          onSubmitEditing={handleSearch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#153075',
    backgroundColor: '#153075',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 28,
  },
  input: {
    height: 56,
    flex: 1,
    paddingHorizontal: 10, 
    color: '#fff'
  },
  icon: {
    marginRight: 6,
    marginLeft: 10,
  },
});

export default SearchBar;
