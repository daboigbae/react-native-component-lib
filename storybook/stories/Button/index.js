import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

export default function Button({ onPress, children }) {
	return <View className="bg-pink-500 w-full" onPress={onPress}>{children}</View>;
}

Button.defaultProps = {
	children: null,
	onPress: () => { },
};

Button.propTypes = {
	children: PropTypes.node,
	onPress: PropTypes.func,
};
