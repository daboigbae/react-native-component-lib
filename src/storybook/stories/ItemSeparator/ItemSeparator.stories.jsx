// Button.stories.js

import React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, Text, FlatList } from "react-native";
import { ItemSeparator } from "../../components";

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
					() => 
						<ItemSeparator 
							separatorStyle="bg-red-500"
						/>
				}
				stickyHeaderIndices={[0]}/>
		</View>
	));

	
