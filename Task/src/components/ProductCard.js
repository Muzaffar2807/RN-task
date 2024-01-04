import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import HeartIcon from 'react-native-vector-icons/Ionicons';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';

const truncateTitle = (title, maxLength) => {
  if (title.length <= maxLength) {
    return title;
  }
  return title.substring(0, maxLength - 3) + '...';
};

const ProductCard = ({product, onAddToCart}) => {
  const navigation = useNavigation();
  const truncatedTitle = truncateTitle(product.title, 14);

  const cartItems = useSelector(state => state)

  console.log(cartItems)

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Productdetails', {product});
      }}>
      <View style={styles.container}>
        <TouchableOpacity>
          <HeartIcon size={22} name="heart-outline" />
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image source={{uri: product.thumbnail}} style={styles.image} />
        </View>
        <View style={styles.listingContainer}>
          <View>
            <Text style={styles.price}>{`$${product.price}`}</Text>
            <Text style={styles.name}>{truncatedTitle}</Text>
          </View>

          <TouchableOpacity onPress={() => {onAddToCart(product)}}>
            <View style={styles.addCartButton}>
              <PlusIcon name="plus" size={12} color="#FFF" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 18,
    width: 170,
    height: 220,
    paddingTop: 14,
    borderColor: '#ddd',
    borderRadius: 12,
    backgroundColor: '#f8f9fb',
  },
  listingContainer: {
    marginTop: 14,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 12,
  },
  name: {
    fontSize: 14,
    color: '#616A7D',
    marginBottom: 4,
    fontFamily: 'Manrope-Light',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Manrope-Medium',
    color: '#1E222B',
  },
  addCartButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: '#2A4BA0',
  },
});

export default ProductCard;
