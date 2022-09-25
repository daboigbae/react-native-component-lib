import React from "react"; 

import { 
	StyleSheet,
	View, 
} from "react-native";

import { styled } from "nativewind";
import { ItemSeparatorType } from "./ItemSeparator.types";

const ItemSeparator: React.FC<ItemSeparatorType> = ({separatorStyle}) => {
	return (
		<View style={[style.baseStyle, separatorStyle]}/>
	)
};

const style = StyleSheet.create({
	baseStyle: {
		height: 1,
		width: "100%",
	}
})

export default styled(ItemSeparator, {
	props: {
		separatorStyle: true
	}
});