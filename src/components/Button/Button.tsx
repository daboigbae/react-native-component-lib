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

const Button: React.FC<ButtonType> = ({label, buttonStyle, textStyle, onPress}) => {
	return (
		<PressableOpacity onPress={onPress}>
			<View style={[style.baseButton, buttonStyle]}>
				<Text style={[style.baseText, textStyle]}>{label}</Text>
			</View>
		</PressableOpacity>
	);
};

export default styled(Button, {
	props: {
	  buttonStyle: true, 
	  textStyle: true
	}
})

const style = StyleSheet.create({
	baseButton: {
		height: 52, 
		width: '100%', 
		backgroundColor: 'pink', 
		justifyContent: 'center', 
		alignItems: 'center', 
		borderRadius: 4
	}, 
	baseText: {
		color: 'white',
	}
})
