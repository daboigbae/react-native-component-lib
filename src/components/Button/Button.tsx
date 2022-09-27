import React from "react"; 

import { 
	StyleSheet,
	Text, 
	View, 
} from "react-native";

import { styled } from "nativewind";

import PressableOpacity from "../PressableOpacity";
import { 
	ButtonType, 
} from "./Button.types";
import Loader from "../Loader";

const Button: React.FC<ButtonType>= ({
	label, 
	buttonColor,
	textColor, 
	onPress, 
	type = "primary", 
	disabled = false, 
	isLoading = false, 
	leftIcon = null, 
	rightIcon = null,
}) => {
	const generateButtonStyle = (borderColor: { backgroundColor?: string | undefined} | undefined, type: string): object => {
		if (type === 'outlined') {
			return {...style.baseButton, borderColor: borderColor?.backgroundColor, ...style.outlinedButton}
		} else if (type === 'text'){
			return {...style.baseButton}
		} else {
			return {...style.baseButton, ...borderColor}
		}
	}
	const generatedStyle = generateButtonStyle(buttonColor?.[0], type); 

	return (
		<PressableOpacity onPress={onPress} disabled={disabled} isLoading={isLoading}>
			<View style={generatedStyle}>
				<View style={style.iconContainer}>
					{leftIcon && leftIcon}
				</View>
				<View>
				{isLoading ?
					<Loader color={textColor?.[0]?.color}/> : 
					<Text style={textColor}>{label}</Text>
				}
				</View>
				<View style={style.iconContainer}>
					{rightIcon && rightIcon}
				</View>
			</View>
		</PressableOpacity>
	);
};

export default styled(Button, {
	props: {
		buttonColor: true, 
		textColor: true, 
		type: true
	}
});

const style = StyleSheet.create({
	baseButton: {
		height: 52, 
		width: '100%', 
		justifyContent: 'space-between', 
		alignItems: 'center', 
		borderRadius: 4, 
		flexDirection: 'row'
	}, 
	outlinedButton: {
		borderWidth: 3,
	}, 
	baseText: {
		color: 'white',
	}, 
	iconContainer: {
		width: 52,
		height: 52, 
	}, 

})
