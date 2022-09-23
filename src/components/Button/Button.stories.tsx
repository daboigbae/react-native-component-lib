// Button.stories.js

import React from "react";
import { action } from "@storybook/addon-actions";
import {text, select} from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react-native";

import { View } from "react-native";
import Button from ".";

import { 
	BACKGROUND_COLORS, 
	BORDER_COLORS, 
	COLORS_GROUP_ID, 
	DEFAULT_BACKGROUND_COLOR,
	DEFAULT_BORDER_COLOR, 
	DEFAULT_TEXT_COLOR, TEXT_COLORS 
} from "../../consts";

storiesOf("Buttons", module)
	.addDecorator((getStory) => <View className="w-full h-full items-center justify-center">{getStory()}</View>)
	.add("Button", () => (
		<View className="w-full px-4">
			<Button
				label={(text("label", "Button Label"))} 
				onPress={action("clicked-text")}
				buttonClassName="w-full h-12 bg-yellow-500 justify-center px-4"
				textClassName="text-black"/>
		</View>
	))
	.add("Primary Button", () => (
		<View className="w-full px-4">
			<Button.Primary
				label={(text("label", "Button Label"))}
				onPress={action("clicked-text")}
				backgroundColor={select("backgroundColor", BACKGROUND_COLORS, DEFAULT_BACKGROUND_COLOR, COLORS_GROUP_ID)}/>
		</View>
	))
	.add("Ouline Button", () => (
		<View className="w-full px-4">
			<Button.Outline
				label={(text("label", "Button Label"))}
				onPress={action("clicked-text")}
				borderColor={select("borderColor", BORDER_COLORS, DEFAULT_BORDER_COLOR, COLORS_GROUP_ID)}
				textColor={select("textColor", TEXT_COLORS, DEFAULT_TEXT_COLOR, COLORS_GROUP_ID)}/>
		</View>
	))
	.add("Text Button", () => (
		<View className="w-full px-4">
			<Button.Text
				label={(text("label", "Button Label"))}
				onPress={action("clicked-text")}
				textColor={select("textColor", TEXT_COLORS, DEFAULT_TEXT_COLOR, COLORS_GROUP_ID)}/>
		</View>
	));
