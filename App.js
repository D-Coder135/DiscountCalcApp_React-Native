import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class DiscountCalcApp extends React.Component {
  render() {
    return (
    <View style = {styles.container}>
      <Text style = {{margin: 30, fontSize: 22, fontWeight: 'bold', color: 'black', textAlign: 'center'}}> Discount Calculator</Text>

      <View style = {styles.inputBox}>
        <Text style = {{fontSize: 18}}>Amount In ₹.</Text>
        <TextInput style = {styles.inputText} />
      </View>

      <View style = {styles.inputBox}>
        <Text style = {{fontSize: 18}}>Discount Percentage(%).</Text>
        <TextInput style = {styles.inputText} />
      </View>

      <View style = {styles.bottomButton}>
        <TouchableOpacity style = {styles.calculateButton}>
          Calculate
        </TouchableOpacity>
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
  inputBox : {
    marginHorizontal: 30
  },
  inputText: {
    backgroundColor: 'white', padding: 15, marginTop: 20, marginBottom: 20, borderRadius: 10, outline: 'none', textAlign: 'center', fontSize: 20
  },
  bottomButton: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  calculateButton: {
    backgroundColor: 'blue', padding: 15, borderRadius: 10, color: 'white'
  }
});
