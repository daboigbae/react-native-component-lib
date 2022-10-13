// Avatar.stories.js

import React from "react";

import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react-native";

import { View, Text } from "react-native";
import { Avatar } from "../../../src";

storiesOf("Avatar", module)
	.addDecorator((getStory) => (
		<View className="w-full h-full items-center justify-center">
			{getStory()}
		</View>
	))
	.add("With Image", () => {
		return (
			<View className="h-40 w-40">
				<Avatar
					image="https://www.w3schools.com/howto/img_avatar.png"
					username="Test User"
				/>
			</View>
		);
	})
	.add("With Username", () => {
		return (
			<View className="h-40 w-40">
				<Avatar image="" username="Test User" />
			</View>
		);
	});
