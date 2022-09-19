// Button.stories.js

import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import { PressableOpacity } from "../../../src";
import CenterView from "../CenterView";
import { Text, View, Image } from "react-native";

storiesOf("PressableOpacity", module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add("making a button", () => (
		<View className="w-full px-4">
			<PressableOpacity onPress={action("clicked-text")}>
				<View className="w-full p-4 bg-blue-500 border-red-500 border justify-center rounded-md">
					<Text className="text-white">Button Text</Text>
				</View>
			</PressableOpacity>
		</View>
	))
	.add("making an image pressable", () => (
		<View className="w-full px-4">
			<PressableOpacity onPress={action("clicked-text")}>
				<View className="w-full p-4 bg-blue-500 border-red-500 border justify-center rounded-md">
					<Image className="text-white" />
				</View>
			</PressableOpacity>
		</View>
	));
