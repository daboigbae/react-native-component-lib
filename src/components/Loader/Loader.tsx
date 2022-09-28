import React from "react"; 

import { 
	ActivityIndicator,
	View, 
	StyleSheet
} from "react-native";

import { styled } from "nativewind";

interface LoaderType {
	color?:  string;
}

const Loader: React.FC<LoaderType> = ({
	color = "#000000"
}) => (
		<View style={style.container}>
			<ActivityIndicator size="small" color={color}/>
		</View>
	);

const style = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1, 
	}
})

export default styled( Loader, {
	props: {
		color: true
	}
});