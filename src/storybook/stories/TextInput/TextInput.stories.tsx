// TextInput.stories.js

import React from "react";

import { storiesOf } from "@storybook/react-native";

import { View } from "react-native";

import {  text } from "@storybook/addon-knobs";
import { TextInput } from "../../../components";

storiesOf("Text Input", module)
	.addDecorator((getStory) => (
		<View className="w-full h-full items-center justify-center">
			{getStory()}
		</View>
	))
	.add("Standard", () => (
		<View className="w-full px-4">
			<TextInput
				label={text("Label", "Label")}
				placeholder={text("Placeholder", "Sample placeholder")}
				error="Sample error message"
			/>
		</View>
	))
	.add("Email", () => (
		<View className="w-full px-4">
			<TextInput
				type="email"
			/>
		</View>
	))
	.add("Password", () => (
		<View className="w-full px-4">
			<TextInput
				type="password"
			/>
		</View>
	));
