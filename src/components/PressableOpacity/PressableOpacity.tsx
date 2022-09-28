import React from "react";

import {
	Pressable,
	Animated,
	StyleSheet
} from "react-native";

import useAnimation from "./useAnimation";
import { PressableOpacityTypes } from "./PressableOpacity.types";

const PressableOpacity = ({ 
	children, 
	isLoading, 
	disabled, 
	customStyle, 
	onPress
}: PressableOpacityTypes) => {
	const {
		fadeIn,
		fadeOut,
		opacityValue
	} = useAnimation();

	return (
		<Pressable
			onPress={onPress}
			disabled={disabled}
			onPressIn={fadeIn}
			onPressOut={fadeOut}
			style={[style.pressableContainer, customStyle]}>
				{children}
				{!isLoading && <Animated.View
					style={[style.animatedView, {opacity: disabled ? .6 : opacityValue}]} />
				}
		</Pressable>
	);
};

const style = StyleSheet.create({
	pressableContainer: {
		position: 'relative',
		justifyContent: 'center', 
		alignItems: 'center', 
	}, 
	animatedView: {
		position: 'absolute', 
		left: 0, 
		top: 0, 
		right: 0,
		bottom: 0,
		backgroundColor: 'gray', 
		borderRadius: 4
	}
})

export default PressableOpacity