import React from "react";
import { Animated } from "react-native";

const FADE_IN_ANIMATION_CONFIG = {
	toValue: .3,
	duration: 100,
	useNativeDriver: false,
};

const FADE_OUT_ANIMATION_CONFIG = {
	toValue: 0,
	duration: 100,
	useNativeDriver: false,
};

export default function useAnimation() {
	const opacityValue = React.useRef(new Animated.Value(0)).current;

	const fadeIn = () => {
		Animated.timing(opacityValue, FADE_IN_ANIMATION_CONFIG).start();
	};

	const fadeOut = () => {
		Animated.timing(opacityValue, FADE_OUT_ANIMATION_CONFIG).start();
	};

	return {
		opacityValue,
		fadeIn,
		fadeOut,
	};
}
