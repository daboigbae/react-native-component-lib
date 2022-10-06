import React from "react";

import { Image, StyleSheet, View } from "react-native";

import { styled } from "nativewind";

import { CardType } from "./Card.types";

const Card: React.FC<CardType> = ({ type, cardColor, imageURL, children }) => {
	const generateCardBaseStyle = (
		cardColor: { backgroundColor?: string | undefined } | undefined,
		type: string | undefined
	): object => {
		if (type === "elevated") {
			return {
				...style.baseCard,
				...style.elevatedCard,
				...cardColor
			};
		}

		if (type === "outlined") {
			return {
				...style.baseCard,
				...style.outlinedCard,
				borderColor: cardColor?.backgroundColor
			};
		}

		return {
			...style.baseCard,
			...style.containedCard,
			...cardColor
		};
	};

	const generatedStyle = generateCardBaseStyle(cardColor?.[0], type);

	return (
		<View style={generatedStyle}>
			{imageURL && <Image source={{ uri: imageURL }} style={style.cardImage} />}
			{children && (
				<View style={{ ...style.childrenContainer }}>{children}</View>
			)}
		</View>
	);
};

export default styled(Card, {
	props: {
		cardColor: true
	}
});

const style = StyleSheet.create({
	baseCard: {
		borderRadius: 8,
		height: "100%",
		width: "100%"
	},
	elevatedCard: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68
	},
	containedCard: {},
	outlinedCard: {
		borderWidth: 2
	},
	cardImage: {
		width: "100%",
		height: "50%",
		borderTopLeftRadius: 6,
		borderTopRightRadius: 6
	},
	childrenContainer: {
		paddingVertical: 8,
		paddingHorizontal: 16
	}
});
