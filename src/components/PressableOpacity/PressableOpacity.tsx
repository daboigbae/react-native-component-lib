import React from "react";

import {
	Pressable,
	Animated,
	StyleSheet
} from "react-native";

import useAnimation from "./useAnimation";
import { PressableOpacityTypes } from "./PressableOpacity.types";

const PressableOpacity = ({ children, isLoading, ...props }: PressableOpacityTypes) => {
	const {
		fadeIn,
		fadeOut,
		opacityValue
	} = useAnimation();

	return (
		<Pressable
			onPressIn={fadeIn}
			onPressOut={fadeOut}
			style={style.pressableContainer}
			{...props}>
				{children}
				{!isLoading && <Animated.View
					style={[style.animatedView, {opacity: props?.disabled ? .4 : opacityValue}]} />
				}
		</Pressable>
	);
};

const style = StyleSheet.create({
	pressableContainer: {
		width: '100%', 
		position: 'relative',
		justifyContent: 'center', 
		alignItems: 'center', 
	}, 
	animatedView: {
		position: 'absolute', 
		left: 0, 
		top: 0, 
		width: '100%', 
		height: '100%', 
		backgroundColor: 'gray', 
		borderRadius: 4
	}
})

export default PressableOpacity