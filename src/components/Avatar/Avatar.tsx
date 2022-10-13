import React from "react";

import { StyleSheet, View, Text, Image } from "react-native";

import { styled } from "nativewind";

import { AvatarType } from "./Avatar.types";
import { getAvatarColor, getAvatarInitials } from "../../utils";

const Avatar: React.FC<AvatarType> = ({ username, image }) => {
	const [backgroundColor, setBackgroundColor] = React.useState("");

	let avatarStyle = { ...style.avatarBase, backgroundColor };

	React.useEffect(() => {
		setBackgroundColor(getAvatarColor());
	}, []);

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
