import React from "react";

export interface ButtonType {
	label: string, 
	buttonColor?: [{backgroundColor?: string | undefined}]; 
	textColor?: [{color?: string | undefined}];
	textStyle?: object,
	onPress: () => void;
	type?: 'text' | 'outlined' | 'primary'; 
	disabled?: boolean;
	isLoading?: boolean;
	leftIcon?: React.ReactNode; 
	rightIcon?: React.ReactNode;
	customButtonStyle?: object;
	customTextStyle?: object;
}
