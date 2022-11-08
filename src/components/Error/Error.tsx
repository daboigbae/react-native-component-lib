import React from "react";

import { View, Text, StyleSheet } from "react-native";

interface ErrorType {
	error?: string;
}

const Error: React.FC<ErrorType> = ({ error }) => (
	<View style={style.container}>
		{error && <Text style={style.text}>{error}</Text>}
	</View>
);

const style = StyleSheet.create({
	container: {
		width: "100%",
		marginTop: 4,
		marginLeft: 4
	},
	text: {
		fontSize: 12,
		color: "#f00"
	}
});
export default Error;
