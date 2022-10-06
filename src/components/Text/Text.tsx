import React from "react";

import { StyleSheet, Text as RNText } from "react-native";

import { styled } from "nativewind";

import { TextType } from "./Text.types";

const Text: React.FC<TextType> = ({ text, textColor, type }) => {
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
		return { ...style.default, ...color };
	};

	const generatedStyle = generateTextStyle(textColor?.[0], type);

	return <RNText style={generatedStyle}>{text}</RNText>;
};

export default styled(Text, {
	props: {
		textColor: true
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
	default: {
		fontSize: 16,
		fontWeight: "300"
	}
});
