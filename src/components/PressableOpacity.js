import React from "react";

import {
	Pressable,
	Animated,
} from "react-native";

import PropTypes from "prop-types";

import useAnimation from "../hooks/useAnimation";

const PressableOpacity = ({ children, onPress, disabled = false }) => {
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
			onPress={onPress}
			disabled={disabled}>
			{children}
			<Animated.View
				className="w-full h-full absolute top-0 left-0 bg-gray-100 "
				style={{ opacity: opacityValue }} />
		</Pressable>
	);
};

PressableOpacity.propTypes = {
	children: PropTypes.object.isRequired,
	onPress: PropTypes.func.isRequired, 
	disabled: PropTypes.bool
};

export default PressableOpacity;