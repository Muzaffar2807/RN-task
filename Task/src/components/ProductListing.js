import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductCard from './ProductCard';
import {ScrollView} from 'react-native-virtualized-view';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {addItemToCart, addToFavourites} from '../redux/actions/Actions';

const ProductListing = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response?.data?.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ProductCard
            product={item}
            onAddToCart={item => {
              dispatch(addItemToCart(item));
            }}
            onAddToFavourites= { item => {
              dispatch(addToFavourites(item));
            }}
          />
        )}
        contentContainerStyle={styles.container}
      />
    </ScrollView>
  );
};

export default ProductListing;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 40,
  },
});
