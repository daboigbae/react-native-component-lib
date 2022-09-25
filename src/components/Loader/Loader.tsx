import { styled } from "nativewind";
import React from "react"; 

import { 
	ActivityIndicator,
	View, 
} from "react-native";

interface LoaderType {
	color?:  [{backgroundColor?: string | undefined}];
}

const Loader: React.FC<LoaderType> = ({
	color = [{backgroundColor: 'black'}],
}) => {
	console.log('color', color)
	return (
		<View className="w-full h-full items-center justify-center">
			<ActivityIndicator size="large" color={color?.[0]?.backgroundColor}/>
		</View>
	);
};

export default styled( Loader, {
	props: {
		color: true
	}
});