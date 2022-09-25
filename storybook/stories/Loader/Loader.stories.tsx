// Button.stories.js

import React from "react";
import { View } from "react-native";

import { storiesOf } from "@storybook/react-native";

import Loader from "../../../src/components/Loader/Loader";

storiesOf("Loader ", module)
	.addDecorator((getStory) => <View className="w-full h-full items-center justify-center">{getStory()}</View>)
	.add("Primary", () => {
		return (
			<View className="w-full px-4">
				<Loader 
					color="bg-red-700"/>
			</View>
		)}
	)
