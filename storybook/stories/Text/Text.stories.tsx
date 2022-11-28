// Text.stories.js

import React from "react";
import { View, Text as RNText } from "react-native";

import { text, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";

import { Text } from "../../../src";

storiesOf("Text", module)
	.addDecorator((getStory) => (
		<View className="w-full h-full items-center justify-center">
			{getStory()}
		</View>
	))
	.add("Default", () => {
		return (
			<View className="w-full px-4">
				<Text
					textColor={select(
						"text color",
						["text-black", "text-blue-600", "text-red-600", "text-gray-400"],
						"text-black"
					)}
				>
					This is body text
				</Text>
			</View>
		);
	})
	.add("SubTitle", () => {
		return (
			<View className="w-full px-4">
				<Text
					type="subtitle"
					textColor={select(
						"text color",
						["text-black", "text-blue-600", "text-red-600", "text-gray-400"],
						"text-black"
					)}
				>
					This is a subtitle
				</Text>
			</View>
		);
	})
	.add("Title", () => {
		return (
			<View className="w-full px-4">
				<Text
					type="title"
					textColor={select(
						"text color",
						["text-black", "text-blue-600", "text-red-600", "text-gray-400"],
						"text-black"
					)}
				>
					This is a title
				</Text>
			</View>
		);
	});
