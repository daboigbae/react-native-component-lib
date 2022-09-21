// Button.stories.js

import React from "react";
import { action } from "@storybook/addon-actions";
import {text, select} from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";
import { View } from "react-native";
import Button from "../../../src/components/Button";

const backgroundColors = {
	"bg-red-500": "bg-red-500",
	"bg-blue-500": "bg-blue-500",
	"bg-yellow-500": "bg-yellow-500",
};

const borderColors = {
	"border-red-500": "border-red-500",
	"border-blue-500": "border-blue-500",
	"border-yellow-500": "border-yellow-500",
};

const textColors = {
	"text-red-500": "text-red-500",
	"text-blue-500": "text-blue-500",
	"text-yellow-500": "text-yellow-500",
};

const groupId = "Colors";

const defaultBackgroundColor = "bg-red-500";
const defaultBorderColor = "border-red-500";
const defaultTextColor = "text-red-500";

storiesOf("Buttons", module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add("Primary Button", () => (
		<View className="w-full px-4">
			<Button
				label={(text("label", "Button Label"))} 
				onPress={action("clicked-text")}
				buttonClassName={select("buttonClassName", backgroundColors, defaultBackgroundColor, groupId)}
				textClassName={select("textClassName", textColors, defaultTextColor, groupId)}/>
		</View>
	))
	.add("Outline Button", () => (
		<View className="w-full px-4">
			<Button.Outline
				label={(text("label", "Button Label"))} 
				borderColor={select("Outline Color", borderColors, defaultBorderColor, groupId)}
				textColor={select("textClassName", textColors, defaultTextColor, groupId)}
				onPress={action("clicked-text")}
			/>
		</View>
	))
	.add("Text Button", () => (
		<View className="w-full px-4">
			<Button.Text
				label={(text("label", "Button Label"))} 
				textColor={select("textClassName", textColors, defaultTextColor, groupId)}
				onPress={action("clicked-text")}
			/>
		</View>
	));
	
