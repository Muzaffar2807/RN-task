import { View, Text } from 'react-native'
import React from 'react'
import StarRating from 'react-native-star-rating';

const StarsRating = ({rating}) => {

  
  return (
    <View style={{width: 110, display: 'flex', 
    flexDirection: 'row', gap: 5}}>
      <StarRating
        disabled={true}
        maxStars={5}
        rating={rating}
        starSize={20}
        fullStarColor="#F9B023"
        emptyStarColor="#1E222B" 
      />
      <Text>{rating.toFixed(2)} Stars</Text>
    </View>
  );
};

export default StarsRating;