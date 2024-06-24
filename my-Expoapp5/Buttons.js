import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Buttons = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image style={styles.image} source={require('./assets/send.png')} />
        <Text style={styles.text}>Sent</Text>
      </View>
      
      
      <View style={styles.imageBox}>
        <Image style={styles.image} source={require('./assets/recieve.png')} />
        <Text style={styles.text}>Receive</Text>
      </View>

      <View style={styles.imageBox}>
        <Image style={styles.image} source={require('./assets/loan.png')} />
        <Text style={styles.text}>Loan</Text>
      </View>

      <View style={styles.imageBox}>
      <Image style={styles.image} source={require('./assets/topUp.png')} />
        <Text style={styles.text}>Topup</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6,
    paddingRight:1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  imageBox: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 4,
    paddingBottom:10,
    paddingTop:13,
  
  },
  image: {
    width: 38,
    height: 39,
    resizeMode: 'cover',
  },
  text: {
    marginTop: 5,
    textAlign: 'center',
    paddingTop:14,
    paddingEnd:1,
    fontSize: 18,
  },
});

export default Buttons;
