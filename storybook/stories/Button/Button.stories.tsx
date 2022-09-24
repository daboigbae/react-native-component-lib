// Button.stories.js

import React from "react";

import { action } from "@storybook/addon-actions";
import {text, select} from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react-native";

import { View, Text } from "react-native";
import { Button } from "../../../src";


storiesOf("Buttons", module)
	.addDecorator((getStory) => <View className="w-full h-full items-center justify-center">{getStory()}</View>)
	.add("Button", () => (
		<View className="w-full px-4">
			<Button
				label={(text("label", "Button Label"))} 
				onPress={action("clicked-text")}
				buttonStyle="font-bold text-white"
				textStyle=""/>
		</View>
	))
