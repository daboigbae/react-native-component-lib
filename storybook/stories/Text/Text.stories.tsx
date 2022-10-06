// Text.stories.js

import React from "react";
import { View } from "react-native";

import { text, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";

import { Text } from "../../../src";

storiesOf("Text", module)
	.addDecorator((getStory) => (
		<View className="w-full h-full items-center justify-center">
			{getStory()}
		</View>
	))
	.add("Title", () => {
		return (
			<View className="w-full px-4">
				<Text
					type="title"
					text={text("text", "This is a title")}
					textColor={select(
						"text color",
						["text-black", "text-blue-600", "text-red-600", "text-gray-400"],
						"text-black"
					)}
				/>
			</View>
		);
	})
	.add("SubTitle", () => {
		return (
			<View className="w-full px-4">
				<Text
					type="subtitle"
					text={text("text", "This is a subtitle")}
					textColor={select(
						"text color",
						["text-black", "text-blue-600", "text-red-600", "text-gray-400"],
						"text-black"
					)}
				/>
			</View>
		);
	})
	.add("Body", () => {
		return (
			<View className="w-full px-4">
				<Text
					text={text("text", "This is an example of body text")}
					textColor={select(
						"text color",
						["text-black", "text-blue-600", "text-red-600", "text-gray-400"],
						"text-black"
					)}
				/>
			</View>
		);
	});
