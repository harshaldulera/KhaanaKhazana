import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, ViewStyle, TextStyle } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  title: string;
}

const variants: Record<NonNullable<ButtonProps["variant"]>, ViewStyle> = {
  default: {
    backgroundColor: '#0ea5e9',
  },
  destructive: {
    backgroundColor: '#ef4444',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  secondary: {
    backgroundColor: '#f1f5f9',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  link: {
    backgroundColor: 'transparent',
  },
};

const sizes: Record<NonNullable<ButtonProps["size"]>, ViewStyle> = {
  default: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  sm: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  lg: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  icon: {
    width: 40,
    height: 40,
    padding: 0,
  },
};

const textVariants: Record<NonNullable<ButtonProps["variant"]>, TextStyle> = {
  default: {
    color: '#ffffff',
  },
  destructive: {
    color: '#ffffff',
  },
  outline: {
    color: '#0f172a',
  },
  secondary: {
    color: '#0f172a',
  },
  ghost: {
    color: '#0f172a',
  },
  link: {
    color: '#0ea5e9',
    textDecorationLine: 'underline',
  },
};

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  style,
  title,
  ...props
}) => {
  const buttonStyles = StyleSheet.flatten([
    styles.base,
    variant && variants[variant],
    size && sizes[size],
    style,
  ]);

  const textStyles = StyleSheet.flatten([
    styles.text,
    variant && textVariants[variant],
  ]);

  return (
    <TouchableOpacity style={buttonStyles} {...props}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
}); 