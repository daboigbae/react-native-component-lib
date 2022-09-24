import React from "react";

import {
	Pressable,
	Animated,
} from "react-native";

import useAnimation from "../../hooks/useAnimation";
import { PressableOpacityTypes } from "./PressableOpacity.types";

const PressableOpacity: React.FC<PressableOpacityTypes> = ({ children, onPress }) => {
	const {
		fadeIn,
		fadeOut,
		opacityValue
	} = useAnimation();

	return (
		<Pressable
			onPressIn={fadeIn}
			onPressOut={fadeOut}
			className="w-full h-auto relative"
			onPress={onPress}>
			{children}
			<Animated.View
				className="w-full h-full absolute top-0 left-0 bg-gray-100 "
				style={{ opacity: opacityValue }} />
		</Pressable>
	);
};

export default PressableOpacity;