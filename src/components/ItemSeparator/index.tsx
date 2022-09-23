import React from "react"; 

import { 
	View, 
} from "react-native";

interface ItemSeparatorType {
	borderStyle?: string;
}

const ItemSeparator: React.FC<ItemSeparatorType> = ({borderStyle}) => (
		<View className={borderStyle ? borderStyle : "h-2"} />
	);

export default ItemSeparator;