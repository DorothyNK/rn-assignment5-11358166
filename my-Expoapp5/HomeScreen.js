import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from './Header';
import Mastercard from './Mastercard';
import Buttons from './Buttons';
import Transactions from './Transactions';
import BottomNav from './BottomNav';
import SettingsScreen from './SettingsScreen'

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Mastercard/>
      <Buttons/>
      <Transactions />
      <BottomNav />
      <SettingsScreen/>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    paddingLeft:10,
    paddingRight:10,
    flex: 1,
    backgroundColor: '#f5f5f5',
    
  },
});

export default HomeScreen;
