import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ButtomNav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image style={styles.image} source={require('./assets/home.png')} />
        <Text style={styles.text}>Home</Text>
      </View>
      
      
      <View style={styles.imageBox}>
        <Image style={styles.image} source={require('./assets/myCards.png')} />
        <Text style={styles.text}>My Cards</Text>
      </View>

      <View style={styles.imageBox}>
        <Image style={styles.image} source={require('./assets/statictics.png')} />
        <Text style={styles.text}>Statistics</Text>
      </View>

      <View style={styles.imageBox}>
      <Image style={styles.image} source={require('./assets/settings.png')} />
        <Text style={styles.text}>Settings</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    backgroundColor: '#fff',
    
  
  },


  imageBox: {
    flex: 1,
    alignItems: 'center',
    paddingBottom:25,

  
  },


  image: {
    
    width: 39,
    height: 39, 
    alignItems:'center',
    
    
  },


  


  text: {
    marginTop: 6,
    textAlign:'center',
    paddingTop:2,
    fontSize: 15,
  
  
  },


 


});

export default ButtomNav;


