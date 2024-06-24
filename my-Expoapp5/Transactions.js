import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Transactions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.transactionText}>Transaction</Text>
        <Text style={styles.sellAllText}>Sell All</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.transactionsColumn}>
          <View style={styles.transactionItem}>
            <Image style={styles.image1} source={require('./assets/apple.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Apple Store</Text>
              <Text style={styles.subText}>Entertainment</Text>
            </View>
          </View>
          <View style={styles.transactionItem}>
            <Image style={styles.image2} source={require('./assets/spotify.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Spotify</Text>
              <Text style={styles.subText}>Music</Text>
            </View>
          </View>
          <View style={styles.transactionItem}>
            <Image style={styles.image3} source={require('./assets/moneyTransfer.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Money Transfer</Text>
              <Text style={styles.subText}>Transaction</Text>
            </View>
          </View>
          <View style={styles.transactionItem}>
            <Image style={styles.image4} source={require('./assets/grocery.png')} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Grocery</Text>
            </View>
          </View>
        </View>
        <View style={styles.amountsColumn}>
          <Text style={styles.amountText}>-$5,99</Text>
          <Text style={styles.amountText}>-$12,99</Text>
          <Text style={styles.amountText}>-$300</Text>
          <Text style={styles.amountText}>-$ 88</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingEnd:6,
    paddingBottom:10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff', 
    marginBottom:0,
    
    
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  transactionText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  sellAllText: {
    fontSize: 23,
    color:'#1e90ff ',
    fontWeight:'bold',
    
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },


  transactionsColumn: {
    flex: 3,
    paddingTop:3,
  
  },


  transactionItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },


  image1: {
    width: 34,
    height: 43 ,
    marginRight: 10,
  },


  image2: {
    width: 36,
    height: 37 ,
    marginRight: 10,
  },

  image3: {
    width: 39,
    height: 40 ,
    marginRight: 10,
  },


  image4: {
    width: 38,
    height: 34 ,
    marginRight: 10,
  },





  textContainer: {
    justifyContent: 'center',
  },

  text: {
    fontSize: 22,
    fontWeight:'bold',
    paddingLeft: 31,
    
  },


  subText: {
    fontSize: 17,
    color: 'gray',
    paddingLeft: 31,
    paddingBottom:20,
  },




  amountsColumn: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },


  amountText: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight:'bold',
  },


});

export default Transactions;
