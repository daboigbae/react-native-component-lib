// Button.stories.js

import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Text, FlatList } from "react-native";
import ItemSeparator from ".";

import {select, text} from "@storybook/addon-knobs";

const SONGS  = [{
	artist: "Gucci Mane", 
	title: "Look ma I did it",
}, 
{
	artist: "Juice WRLD", 
	title: "Go Hard 2.0",
}, 
{
	artist: "Lil Baby",
	title: "Woah",
}, 
{
	artist: "Lil Uzi Vert",
	title: "XO Tour Llif3",
}, 
{
	artist: "Lil Wayne",
	title: "Uproar",
}, 
{
	artist: "21 Savage",
	title: "Bank Account",
}, 
{
	artist: "Lil Pump",
	title: "Gucci Gang",
},
{
	artist: "Lil Skies",
	title: "Red Roses",
}, 
{
	artist: "Lil Yachty",
	title: "1 Night",
}, 
{
	artist: "Lil Xan",
	title: "Betrayed",
}, 
{
	artist: "Lil Dicky",
	title: "Freaky Friday",
}, 
{
	artist: "Lil Jon",
	title: "Turn Down For What",
}
];

const borderColors = {
	"none": null, 
	"border-red-500 border-2": "border-red-500 border-2",
	"border-blue-500 border-2": "border-blue-500 border-2",
	"border-yellow-500 border-2": "border-yellow-500 border-2",
};

const groupId = "Colors";

const defaultBorderColor = "border-red-500";

const renderItem = ({ item }) => (
	<View>
		<View className="w-full py-4 px-4 justify-between flex-row">
			<Text>{item.title}</Text>
			<Text>by {item.artist}</Text>
		</View>
	</View>
);

const ListHeaderComponent = () => (
	<View className="items-center border-b-orange-600 border-b-2 py-4 bg-white">
		<Text className="text-2xl">Song Library</Text>
	</View>
);

storiesOf("Item Separator", module)
	.add("FlatList Example", () => (
		<View className="w-full h-full">
			<FlatList
				ListHeaderComponent={ListHeaderComponent}
				data={SONGS}
				renderItem={renderItem}
				ItemSeparatorComponent={
					() => <ItemSeparator borderStyle={select("borderStyle", borderColors, defaultBorderColor, groupId)}/>}
				stickyHeaderIndices={[0]}/>
		</View>
	));

	
