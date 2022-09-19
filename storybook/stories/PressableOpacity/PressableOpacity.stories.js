// Button.stories.js

import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import { PressableOpacity } from "../../../src/components";
import CenterView from "../CenterView";
import { Text } from "react-native";

storiesOf("PressableOpacity", module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add("with text", () => (
		<PressableOpacity onPress={action("clicked-text")} >
			<Text>hi</Text>
		</PressableOpacity>
	));
