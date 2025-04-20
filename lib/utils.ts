import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export function mergeStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  ...styles: Array<Partial<T> | undefined | null | false>
): T {
  return StyleSheet.flatten(styles.filter(Boolean)) as T;
}

// Helper function to conditionally apply styles
export function cn<T extends NamedStyles<T> | NamedStyles<any>>(
  ...styles: Array<Partial<T> | undefined | null | false>
): T {
  return mergeStyles(...styles);
} 