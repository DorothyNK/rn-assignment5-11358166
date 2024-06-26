import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import HomeScreen from './HomeScreen';


const App = () => {

  return ( 
    
    <SafeAreaView style={styles.container}>  
      <HomeScreen /> 
    </SafeAreaView>

  );
};
  
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },

});
  

export default App;