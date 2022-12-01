// TextInput.stories.js

import React from "react";

import { storiesOf } from "@storybook/react-native";

import { ActivityIndicator, View } from "react-native";

import Image from "../../../src/components/Image/Image";

storiesOf("Image", module)
	.addDecorator((getStory) => (
		<View className="w-full h-full items-center justify-center">
			{getStory()}
		</View>
	))
	.add("Standard", () => (
		<View className="h-80 w-80">
			<Image
				source={{ uri: "https://source.unsplash.com/random?sig=1" }}
				PlaceholderContent={<ActivityIndicator size="large" />}
			/>
		</View>
	))
	.add("With Fade Transition", () => (
		<View className="h-80 w-80">
			<Image
				source={{ uri: "https://source.unsplash.com/random?sig=2" }}
				PlaceholderContent={<ActivityIndicator size="large" />}
				transition={true}
				transitionDuration={500}
			/>
		</View>
	));
