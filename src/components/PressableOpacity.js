import React from "react";

import {
	Pressable,
	Animated,
	View
} from "react-native";

import PropTypes from "prop-types";

import useAnimation from "../hooks/useAnimation";

const PressableOpacity = ({ children, onPress }) => {
	const {
		fadeIn,
		fadeOut,
		opacityValue
	} = useAnimation();

	return (
		<Pressable
			onPressIn={fadeIn}
			onPressOut={fadeOut}
			className="w-full h-12 relative"
			onPress={onPress}>
			<Animated.View
				className="w-full h-full absolute top-0 left-0 bg-slate-200 "
				style={{ opacity: opacityValue }} />
			<View
				className="items-center justify-center w-full h-full absolute top-0 left-0">
				{children}
			</View>
		</Pressable>
	);
};

PressableOpacity.propTypes = {
	children: PropTypes.object.isRequired,
	onPress: PropTypes.func.isRequired
};

export default PressableOpacity;