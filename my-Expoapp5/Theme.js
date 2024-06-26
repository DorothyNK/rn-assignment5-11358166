
import { DefaultTheme, DarkTheme } from 'react-native-paper';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    background: '#ffffff',
    surface: '#ffffff',
    accent: '#03dac4',
    error: '#b00020',
    text: '#000000',
    onSurface: '#000000',
    disabled: '#f0f0f0',
    placeholder: '#a0a0a0',
    backdrop: '#000000',
  },
};

export const isDarkTheme= {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#bb86fc',
    background: '#121212',
    surface: '#121212',
    accent: '#03dac6',
    error: '#cf6679',
    text: '#ffffff',
    onSurface: '#ffffff',
    disabled: '#373737',
    placeholder: '#a1a1a1',
    backdrop: '#ffffff',
  },
};
