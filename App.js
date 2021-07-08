import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class DiscountCalcApp extends React.Component {
  render() {
    return (
    <View style = {styles.container}>
      <Text style = {{margin: 30, fontSize: 22, fontWeight: 'bold', color: 'black', textAlign: 'center'}}> Discount Calculator</Text>

      <View style = {styles.inputBox}>
        <Text>Amount In ₹.</Text>
        <TextInput />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
