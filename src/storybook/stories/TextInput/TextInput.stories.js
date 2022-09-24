// Button.stories.js

import React from "react";

import { storiesOf } from "@storybook/react-native";

import { View } from "react-native";

import FormInput from "../../../components/FormInput";
import { boolean, text } from "@storybook/addon-knobs";

storiesOf("Text Input", module)
	.addDecorator((getStory) => <View className="w-full h-full items-center justify-center">{getStory()}</View>)
	.add("Standard", () => (
		<View className="w-full px-4">
			<FormInput
				label={text("Label", "Label")}
				placeholder={text("Placeholder", "Placeholder")}
				secureTextEntry={boolean("Secure Text Entry", false)}
				autoCapitalize={text("Auto Capitalize", "none")}
				error={"sample error message"}
			/>
		</View>
	))
	.add("Email", () => (
		<View className="w-full px-4">
			<FormInput.Email
				editable={!boolean("Disabled", false)}
				error={"sample error message"}
			/>
		</View>
	))
	.add("Password", () => (
		<View className="w-full px-4">
			<FormInput.Password
				editable={!boolean("Disabled", false)}
				error={"sample error message"}
			/>
		</View>
	));
