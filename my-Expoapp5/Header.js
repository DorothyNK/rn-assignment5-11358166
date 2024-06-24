import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
        <Image source={require('./assets/profile.png')}style={styles.roundedImage} />
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Welcome back,</Text>
        <Text style={styles.subText}>Eric Atsu</Text>
      </View>
      <Image source={require('./assets/search.png')} style={styles.searchIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  roundedImage: {
    width: 80,
    height: 80,
    borderRadius:25,
  },
  textContainer: {
    marginLeft: 20,
    flex: 1,
    
  },
  mainText: {
    fontSize: 20,
    fontWeight: '200',
  
  },
  subText: {
    fontSize: 26,
    color: 'black',
    fontWeight:'bold',
    paddingBottom:10,
    marginTop:6,
  },
  searchIcon: {
    width: 38,
    height: 35,
    paddingLeft:10,
  },
});

export default Header;
