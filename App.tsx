/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import Router from './src/navigation/Router';

const database = require('./src/components/Handlers/database.js');

const App: () => Node = () => {
  try {
    database.createListTable();
  }catch (error) {
    console.log('Failed to create list table' + error);
  }
  
  try {
    database.createItemTable();
  }catch (error) {
    console.log('Failed to create item table' + error);
  }
  
  return <Router />;



};



export default App;