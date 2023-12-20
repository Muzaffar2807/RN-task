import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');
const widths = width / 5;

export default StyleSheet.create({
  searchContainer: {
    backgroundColor: '#2A4BA0',
    padding: 12,
    paddingHorizontal: 10,
  },

  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 22,
    paddingBottom: 12,
    paddingHorizontal: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
  },
  deliveryAddress: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  deliveryContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  addressHeading: {
    color: '#ccc',
    fontSize: 11,
  },
  addressTextSize: {
    color: '#F8F9FB',
    fontSize: 14,
  },

  offersContainer: {
    marginTop: 22
  },
});
