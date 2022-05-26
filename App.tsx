import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/dev';

import theme from './src/styles/theme';
import { Home } from './src/screens/Home';
import { CarDetails } from './src/screens/CarDetails';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <CarDetails />
    </ThemeProvider>
  );
}
