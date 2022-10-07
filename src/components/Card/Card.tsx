import React from "react";

import { Image, StyleSheet, View } from "react-native";

import { styled } from "nativewind";

import { CardType } from "./Card.types";

const Card: React.FC<CardType> = ({ type, cardColor, imageURL, children }) => {
	let cardStyle = {
		...style.baseCard,
		...cardColor?.[0]
	};

	let outlinedCardStyle = {
		...style.baseCard,
		borderColor: cardColor?.[0].backgroundColor
	};

	if (type === "elevated")
		cardStyle = StyleSheet.compose(cardStyle, style.elevatedCard as any);

	if (type === "outlined")
		cardStyle = StyleSheet.compose(
			outlinedCardStyle,
			style.outlinedCard as any
		);

	return (
		<View style={cardStyle}>
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
