import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { useTheme } from '../ThemeContext';

export const ThemedView: React.FC<ViewProps> = ({ style, ...props }) => {
  const theme = useTheme();
  console.log('Consuming theme in ThemedView:', theme); // Debugging
  return <View style={[styles.view, { backgroundColor: theme.colors.background }, style]} {...props} />;
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
