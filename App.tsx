import React from 'react';
import { StatusBar } from 'react-native';
import App from './src/App';

export default function Main() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <App />
    </>
  );
}