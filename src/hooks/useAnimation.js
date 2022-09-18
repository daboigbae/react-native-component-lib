import React from "react";
import { Animated } from "react-native";

const ANIMATION_CONFIG = {
	toValue: 1,
	duration: 100,
	useNativeDriver: true,
};

export default function useAnimation() {
	const opacityValue = React.useRef(new Animated.Value(0)).current;

	const fadeIn = () => {
		Animated.timing(opacityValue, ANIMATION_CONFIG).start();
	};

	const fadeOut = () => {
		Animated.timing(opacityValue, ANIMATION_CONFIG).start();
	};

	return {
		opacityValue,
		fadeIn,
		fadeOut,
	};
}
