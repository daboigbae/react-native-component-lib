// Button.stories.js

import React from "react";
import { View } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { Pill } from "../../../components";



storiesOf("Pill ", module)
	.addDecorator((getStory) => <View className="w-full h-full items-center justify-center">{getStory()}</View>)
	.add("Primary", () => {
		return (
			<View className="w-full px-4">
				<Pill 
					value={"Test"}
					/>
			</View>
		)}
	)
