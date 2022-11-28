// TextInput.stories.js

import React from "react";

import { storiesOf } from "@storybook/react-native";

import { View } from "react-native";

import FormInput from "../../../src/components/TextInput/TextInput";
import { text } from "@storybook/addon-knobs";

storiesOf("Text Input", module)
	.addDecorator((getStory) => (
		<View className="w-full h-full items-center justify-center">
			{getStory()}
		</View>
	))
	.add("Standard", () => (
		<View className="w-full px-4">
			<FormInput
				label={text("Label", "Label")}
				placeholder={text("Placeholder", "Sample placeholder")}
				error="Sample error message"
			/>
		</View>
	))
	.add("Email", () => (
		<View className="w-full px-4">
			<FormInput type="email" />
		</View>
	))
	.add("Password", () => (
		<View className="w-full px-4">
			<FormInput type="password" />
		</View>
	));
