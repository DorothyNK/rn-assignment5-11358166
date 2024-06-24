
import React from 'react';
import { View, Text, ScrollView, Switch, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
     
      <View style={styles.settingsContainer}>
        <Text style={styles.header}>Settings</Text>
        
        <View style={styles.listItem}>
          <Text>Language</Text>
          <Icon name="chevron-right" size={20} />
        </View>
        <View style={styles.listItem}>
          <Text>My Profile</Text>
          <Icon name="chevron-right" size={20} />
        </View>
        <View style={styles.listItem}>
          <Text>Contact Us</Text>
          <Icon name="chevron-right" size={20} />
        </View>
        <View style={styles.listItem}>
          <Text>Change Password</Text>
          <Icon name="chevron-right" size={20} />
        </View>
        <View style={styles.listItem}>
          <Text>Privacy Policy</Text>
          <Icon name="chevron-right" size={20} />
        </View>
        
        <View style={styles.themeContainer}>
          <Text style={styles.themeText}>Theme</Text>
          <Switch />
        </View>
        
        <View style={styles.imagesContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/home.png')} style={styles.image} />
            <Text style={styles.text}>Home</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/myCards.png')} style={styles.image} />
            <Text style={styles.text}>My Cards</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/statictics.png')} style={styles.image} />
            <Text style={styles.text}>Statistics</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/settings.png')} style={styles.image} />
            <Text style={styles.text}>Settings</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop:20,
  },
  initialView: {
    height: 600, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  initialText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  

  settingsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff', 
  
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderColor: '#ccc',
  },
  themeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginTop:70,
  },
  themeText: {
    fontSize: 18,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:10,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
    paddingTop:150,
  },
  image: {
    width: 39,
    height: 39,
    borderRadius: 10,
  },

  text:{
    fontSize: 15,

  },
});

export default SettingsScreen;
