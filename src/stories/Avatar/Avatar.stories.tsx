// Avatar.stories.js

import React from "react";

import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react-native";

import { View, Text } from "react-native";
import { Avatar } from "../../components";

storiesOf("Avatar", module)
	.addDecorator((getStory) => (
		<View className="w-full h-full items-center justify-center">
			{getStory()}
		</View>
	))
	.add("With Image URL", () => {
		return (
			<View className="h-40 w-40">
				<Avatar
					image={{ uri: "https://www.w3schools.com/howto/img_avatar.png" }}
					username="Test User"
				/>
			</View>
		);
	})
	.add("With Local Image", () => {
		return (
			<View className="h-40 w-40">
				<Avatar image={require("./assets/avatar.png")} />
			</View>
		);
	})
	.add("With Username", () => {
		return (
			<View className="h-40 w-40">
				<Avatar username="Test User" />
			</View>
		);
	});
