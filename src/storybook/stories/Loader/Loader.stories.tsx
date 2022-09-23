// Button.stories.js

import React from "react";

import { action } from "@storybook/addon-actions";
import {text, select, color} from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react-native";

import { View } from "react-native";
import Button from "../../../components/Button";

import Loader from "../../../components/Loader";

storiesOf("Loader", module)
	.addDecorator((getStory) => <View className="w-full h-full bg-yellow-500 items-center justify-center">{getStory()}</View>)
	.add("Basic Implementation", () => (
		<View className="w-full">
			<Loader color={color('Color', 'black', 'color')}/>
		</View>
	));
