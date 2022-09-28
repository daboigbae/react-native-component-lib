import React from 'react'; 
import { PressableProps } from 'react-native';

export interface PressableOpacityTypes extends PressableProps {
	children: React.ReactNode;
	isLoading?: boolean;
	customStyle?: object | null;
  }