import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';


const {width, height} = Dimensions.get('window');
const widths = width / 5;


export default StyleSheet.create({
  test: {
    color: 'red',
  },
});
