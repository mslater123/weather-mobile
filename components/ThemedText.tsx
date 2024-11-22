import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useTheme } from '../ThemeContext';

export const ThemedText: React.FC<TextProps> = ({ style, children, ...props }) => {
  const theme = useTheme();
  console.log('Consuming theme in ThemedText:', theme); // Debugging
  return (
    <Text style={[styles.text, { color: theme.colors.text }, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
