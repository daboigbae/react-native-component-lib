import React from "react";

import { StyleSheet, Text } from "react-native";

import { styled } from "nativewind";

import { TextType } from "./Typography.types";

const Typography: React.FC<TextType> = ({ text, textColor, type }) => {
	const generateTextStyle = (
		color: { color?: string | undefined } | undefined,
		type: string | undefined
	): object => {
		if (type === "title") {
			return { ...style.title, ...color };
		}
		if (type === "subtitle") {
			return { ...style.subtitle, ...color };
		}
		return { ...style.body, ...color };
	};

	const generatedStyle = generateTextStyle(textColor?.[0], type);

	return <Text style={generatedStyle}>{text}</Text>;
};

export default styled(Typography, {
	props: {
		textColor: true,
		type: true
	}
});

const style = StyleSheet.create({
	title: {
		fontSize: 32,
		fontWeight: "900"
	},
	subtitle: {
		fontSize: 24,
		fontWeight: "600"
	},
	body: {
		fontSize: 16,
		fontWeight: "300"
	}
});
