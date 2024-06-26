import React from 'react';
import { View, Text, ScrollView, Switch, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const SettingsScreen = () => {

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.settingsContainer}>
        <Text style={styles.header}>Settings</Text>
        
        <View style={styles.listItem}>
          <Text style={styles.list}>Language</Text>
          <Icon style={styles.chev} name="chevron-right" size={35} />
        </View>

        <View style={styles.listItem}>
          <Text style={styles.list}>My Profile</Text>
          <Icon style={styles.chev} name="chevron-right" size={35} />
        </View>
        <View style={styles.listItem}>
          <Text  style={styles.list}>Contact Us</Text>
          <Icon style={styles.chev} name="chevron-right" size={35} />
        </View>
        <View style={styles.listItem}>
          <Text  style={styles.list}>Change Password</Text>
          <Icon style={styles.chev} name="chevron-right" size={35} />
        </View>
        <View style={styles.listItem}>
          <Text  style={styles.list}>Privacy Policy</Text>
          <Icon style={styles.chev} name="chevron-right" size={35} />
        </View>
        
        <View style={styles.themeContainer}>
          <Text style={styles.themeText}>Theme</Text>
          <Switch  />
        </View>

        
        <View style={styles.imagesContainer}>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/home.png')} style={styles.image} />
            <Text>Home</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/myCards.png')} style={styles.image} />
            <Text>MyCards</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/statictics.png')} style={styles.image} />
            <Text>Statistics</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/settings.png')} style={styles.image} />
            <Text>Settings</Text>
          </View>
        </View>
      </View>
    </ScrollView>


  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop:25,
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


chev:{
  paddingTop:20, 
   
 

},


  header: {
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },


  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    
  },
  themeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingTop:55,
    paddingBottom:200,
    
  },
  themeText: {
    fontSize: 35,
    fontWeight:'600',
    
  },

  list: {
    fontSize: 20,
    paddingTop:20,
    fontWeight:'500',
  }, 

  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
    paddingLeft:15,

  },
  image: {
    width: 39,
    height: 39,
    borderRadius: 10,
  },
});

export default SettingsScreen;
