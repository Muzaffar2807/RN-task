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
    fontFamily: 'Manrope-Bold',
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
    fontFamily: 'Manrope-Regular',
  },
  addressTextSize: {
    color: '#F8F9FB',
    fontSize: 14,
    fontFamily: 'Manrope-Regular',
  },

  offersContainer: {
    marginTop: 22,
  },

  recommendedContainer: {
    paddingHorizontal: 14,
    paddingTop: 18,
    paddingBottom: 70,
  },

  textHeading: {
    fontSize: 30,
    paddingBottom: 12,
    fontFamily: 'Manrope-Medium',
    color: '#1E222B',
  },

  container: {
    padding: 8,
  },
});
