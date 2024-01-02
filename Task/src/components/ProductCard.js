// ProductItem.js
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProductCard = ({product}) => { 
  

  return (
    <View style={styles.container}>
      
      <Text style={styles.name}>{product.title}</Text>
      <Text style={styles.price}>{`$${product.price}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    margin: 5,
    
    paddingTop: 14, 
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  image: {
    width: 160,
    height: 150,
    marginBottom: 8,
    borderRadius: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
});

export default ProductCard;
