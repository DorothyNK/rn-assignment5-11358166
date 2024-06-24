import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Mastercard = () => {
  return (
    <View style={styles.container}>
     <Image source={require('./assets/Card.png')}style={styles.cardImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff', 
    
  },

  cardImage: {
    width: '100%',
    height: 220,
    borderRadius: 32,
  },
});

export default Mastercard;
