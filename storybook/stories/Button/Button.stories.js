// Button.stories.js

import React from "react";
import { action } from "@storybook/addon-actions";
import {text, select} from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react-native";
import CenterView from "../CenterView";
import { View } from "react-native";
import Button from "../../../src/components/Button";
import { BACKGROUND_COLORS, BORDER_COLORS, COLORS_GROUP_ID, DEFAULT_BACKGROUND_COLOR, DEFAULT_BORDER_COLOR, DEFAULT_TEXT_COLOR, TEXT_COLORS } from "../consts";


storiesOf("Buttons", module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add("Primary Button", () => (
		<View className="w-full px-4">
			<Button
				label={(text("label", "Button Label"))} 
				onPress={action("clicked-text")}
				buttonClassName={select("buttonClassName", BACKGROUND_COLORS, DEFAULT_BACKGROUND_COLOR, COLORS_GROUP_ID)}
				textClassName={select("textClassName", TEXT_COLORS, DEFAULT_TEXT_COLOR, COLORS_GROUP_ID)}/>
		</View>
	))
	.add("Outline Button", () => (
		<View className="w-full px-4">
			<Button.Outline
				label={(text("label", "Button Label"))} 
				borderColor={select("Outline Color", BORDER_COLORS, DEFAULT_BORDER_COLOR, COLORS_GROUP_ID)}
				textColor={select("textClassName", TEXT_COLORS, DEFAULT_TEXT_COLOR, COLORS_GROUP_ID)}
				onPress={action("clicked-text")}
			/>
		</View>
	))
	.add("Text Button", () => (
		<View className="w-full px-4">
			<Button.Text
				label={(text("label", "Button Label"))} 
				textColor={select("textClassName", TEXT_COLORS, DEFAULT_TEXT_COLOR, COLORS_GROUP_ID)}
				onPress={action("clicked-text")}
			/>
		</View>
	));
	
