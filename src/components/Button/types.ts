import React from "react";

export interface ButtonType {
	label: string;
	onPress: () => void;
	buttonClassName?: string;
	textClassName?: string;
	disabled?: boolean;
}

export interface PrimaryButtonType { 
	backgroundColor: string;
	textColor?: string;
	label: string;
	onPress: () => void;
	disabled?: boolean;
}

export interface OutlineButtonType {
	borderColor: string;
	textColor: string;
	label: string;
	onPress: () => void;
	disabled?: boolean;
}

export interface TextButtonType {
	textColor?: string;
	label: string;
	onPress: () => void;
	disabled?: boolean;
}

export interface IconButtonType {
	backgroundColor?: string; 
	textColor?: string; 
	onPress: () => void; 
	label: string; 
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	disabled?: boolean;
}