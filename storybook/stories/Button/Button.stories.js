// Button.stories.js

import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";
import { View } from "react-native";
import Button from "../../../src/components/Button";

storiesOf("Buttons", module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add("Primary Button", () => (
		<View className="w-full px-4">
			<Button
				label="Primary Button" 
				onPress={action("clicked-text")}
				buttonClassName="bg-gray-500"/>
		</View>
	))
	.add("Outline Button", () => (
		<View className="w-full px-4">
			<Button.Outline
				label="Outline Button"
				borderColor="border-blue-700"
				textColor="text-blue-700 "
				onPress={action("clicked-text")}
			/>
		</View>
	))
	.add("Text Button", () => (
		<View className="w-full px-4">
			<Button.Text
				label="Outline Button Button"
				textColor="text-red-500"
				onPress={action("clicked-text")}
			/>
		</View>
	));
	
