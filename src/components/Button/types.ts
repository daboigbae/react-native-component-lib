import React from "react";

export interface ButtonType {
	label: string;
	onPress: () => void;
	buttonColor: string;
	textColor: string;
	disabled?: boolean;
	isLoading?: boolean;
}

export interface OutlineButtonType {
	buttonColor: string;
	textColor: string;
	label: string;
	onPress: () => void;
	disabled?: boolean;
	isLoading?: boolean;
}

export interface TextButtonType {
	textColor: string;
	label: string;
	onPress: () => void;
	disabled?: boolean;
	isLoading?: boolean;
}

export interface IconButtonType {
	backgroundColor?: string; 
	textColor?: string; 
	onPress: () => void; 
	label: string; 
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	disabled?: boolean;
	isLoading?: boolean;
}