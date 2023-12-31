import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const OffersCard = () => {
  const data = [{id: 1}, {id: 2}, {id: 3}];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}>
      {data.map(item => (
        <TouchableOpacity key={item.id} style={styles.item}>
          <View>
            <Image
              style={styles.image}
              source={require('../assets/dummyImage.png')}
            />
          </View>
          <View>
            <Text style={styles.textStyle}>Get</Text>
            <Text
              style={{fontSize: 26, color: '#fff', fontFamily: 'Manrope-Bold'}}>
              50% OFF
            </Text>
            <Text style={styles.textStyle}>On first 03 order</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 130,
    backgroundColor: '#F9B023',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 16,
    minWidth: 280,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  textStyle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Manrope-Medium',
  },
});

export default OffersCard;
