import React from "react"; 

import { 
	ActivityIndicator,
	View, 
} from "react-native";

interface LoaderType {
	color: string;
}

const Loader: React.FC<LoaderType> = ({
	color = "gray",
}) => {
	return (
		<View className="w-full h-full items-center justify-center">
			<ActivityIndicator size="large" color={color}/>
		</View>
	);
};

export default Loader;