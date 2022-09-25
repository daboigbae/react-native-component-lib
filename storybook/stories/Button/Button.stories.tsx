// Button.stories.js

import React from "react";

import { action } from "@storybook/addon-actions";
import {text, select} from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react-native";

import { View } from "react-native";
import { Button } from "../../../src";

storiesOf("Buttons", module)
	.addDecorator((getStory) => <View className="w-full h-full items-center justify-center">{getStory()}</View>)
	.add("Primary Button", () => {
		return (
			<View className="w-full px-4">
				<Button
					label={(text("label", "Button Label"))} 
					onPress={action("clicked-text")}
					buttonColor="bg-green-700"
					textColor="text-white"/>
			</View>
		)}
	)
	.add("Outline Button", () => {
		return (
			<View className="w-full px-4">
				<Button
					label={(text("label", "Button Label"))} 
					onPress={action("clicked-text")}
					buttonColor="bg-green-700"
					textColor="text-green-700"
					type="outlined"/>
			</View>
		)}
	)
	.add("Text Button", () => {
		return (
			<View className="w-full px-4">
				<Button
					label={(text("label", "Button Label"))} 
					onPress={action("clicked-text")}
					textColor="text-green-700"
					type="text"/>
			</View>
		)}
	)
