// Card.stories.js

import React from "react";

import { text, select, number } from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react-native";

import { Text, View } from "react-native";
import { action } from "@storybook/addon-actions";
import { Button, Card, ItemSeparator } from "../../components";

storiesOf("Cards", module)
	.addDecorator((getStory) => (
		<View className="w-full h-full items-center justify-center px-4">
			{getStory()}
		</View>
	))
	.add("Elevated Card", () => {
		return (
			<View className="w-full h-96">
				<Card
					type="elevated"
					cardColor="bg-white"
					imageURL={text(
						"Image Url",
						"https://cdn.pixabay.com/photo/2014/07/28/20/39/sunset-404072__340.jpg"
					)}
				>
					<View className="w-full">
						<Text className="text-2xl font-bold">Card Title</Text>
						<Text className="text-base font-light">
							It is a long established fact that a reader will be distracted by
							the readable content.
						</Text>
						<ItemSeparator separatorStyle="h-4" />
						<Button
							buttonColor="bg-blue-600"
							textColor="text-white"
							label="Action Button"
							onPress={action("clicked Button")}
						/>
					</View>
				</Card>
			</View>
		);
	})
	.add("Outlined Card", () => {
		return (
			<View className="w-full h-96">
				<Card
					type="outlined"
					cardColor="bg-black"
					imageURL={text(
						"Image Url",
						"https://cdn.pixabay.com/photo/2014/07/28/20/39/sunset-404072__340.jpg"
					)}
				>
					<Text className="text-2xl font-bold">Card Title</Text>
					<Text className="text-base font-light">
						It is a long established fact that a reader will be distracted by
						the readable content.
					</Text>
					<ItemSeparator separatorStyle="h-4" />
					<Button
						type="outlined"
						buttonColor="bg-black"
						textColor="text-black"
						label="Action Button"
						onPress={action("clicked Button")}
					/>
				</Card>
			</View>
		);
	})
	.add("Flat Card", () => {
		return (
			<View className="w-full h-96">
				<Card
					cardColor="bg-blue-600"
					imageURL={text(
						"Image Url",
						"https://cdn.pixabay.com/photo/2014/07/28/20/39/sunset-404072__340.jpg"
					)}
				>
					<Text className="text-2xl font-bold text-white">Card Title</Text>
					<Text className="text-base font-normal text-white">
						It is a long established fact that a reader will be distracted by
						the readable content.
					</Text>
					<ItemSeparator separatorStyle="h-4" />
					<Button
						type="outlined"
						buttonColor="bg-white"
						textColor="text-white"
						label="Action Button"
						onPress={action("clicked Button")}
					/>
				</Card>
			</View>
		);
	});
