"use client"
import { ThemeContext } from '@context-providers';
import { useContext } from 'react';

export const useTheme = () => useContext(ThemeContext);
export default useTheme;
