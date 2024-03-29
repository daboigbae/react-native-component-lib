// Button.stories.js

import React from "react";

import { action } from "@storybook/addon-actions";
import {text, boolean} from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react-native";

import { View, Text } from "react-native";
import { Button } from "../../../components";

storiesOf("Buttons", module)
	.addDecorator((getStory) => <View className="w-full h-full items-center justify-center">{getStory()}</View>)
	.add("Primary Button", () => {
		return (
			<View className="w-full px-4">
				<Button
					label={(text("label", "Button Label"))} 
					onPress={action("clicked-text")}
					buttonColor="bg-green-700"
					textColor="text-white"
					disabled={boolean("Disabled?", false)}
					isLoading={boolean("Is Loading?", false)}/>
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
					type="outlined"
					disabled={boolean("Disabled?", false)}
					isLoading={boolean("Is Loading?", false)}/>
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
					type="text"
					disabled={boolean("Disabled?", false)}
					isLoading={boolean("Is Loading?", false)}/>
			</View>
		)}
	)
	.add("Icon Button", () => {
		return (
			<View className="w-full px-4">
				<Button
					label={(text("label", "Button Label"))} 
					onPress={action("clicked-text")}
					textColor="text-white"

					disabled={boolean("Disabled?", false)}
					leftIcon={<View className="w-full h-full items-center justify-center"><Text>X</Text></View>}
					rightIcon={<View className="w-full h-full items-center justify-center"><Text>{'>'}</Text></View>}
					buttonColor="bg-green-700"
					isLoading={boolean("Is Loading?", false)}/>
			</View>
		)}
	)
	.add("Custom Button", () => {
		return (
			<View className="w-full px-4">
				<Button
					label={(text("label", "Button Label"))} 
					onPress={action("clicked-text")}
					buttonColor="bg-green-700"
					textColor="text-white"
					disabled={boolean("Disabled?", false)}
					isLoading={boolean("Is Loading?", false)}
					customButtonStyle="rounded-full px-2 py-1 bg-purple-200 w-32 justify-center items-center"
					customTextStyle="text-black"/>
			</View>
		)}
	)
