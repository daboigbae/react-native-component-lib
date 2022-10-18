import React from "react";

import { StyleSheet, View, Text, Image } from "react-native";

import { styled } from "nativewind";

import { AvatarType } from "./Avatar.types";
import { getAvatarColor, getAvatarInitials } from "./utils";

const backgroundColor = getAvatarColor();

const Avatar: React.FC<AvatarType> = ({ username, image }) => {
	
	let avatarStyle = StyleSheet.compose(
		{ backgroundColor },
		style.avatarBase as any
	);

	return (
		<View style={avatarStyle}>
			{image ? (
				<Image source={{ uri: image }} style={style.avatarImage} />
			) : (
				<Text style={style.avatarText}>{getAvatarInitials(username)}</Text>
			)}
		</View>
	);
};

export default styled(Avatar);

const style = StyleSheet.create({
	avatarBase: {
		height: "100%",
		width: "100%",
		borderRadius: 100,
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	avatarImage: {
		height: "100%",
		width: "100%",
		borderRadius: 100
	},
	avatarText: {
		fontSize: 54,
		fontWeight: "900"
	}
});
