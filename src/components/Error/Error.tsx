import React from "react"; 

import { 
	View,
	Text,
} from "react-native";

interface ErrorType {
	error?: string;
}

const Error: React.FC<ErrorType> = ({
	error
}) => (
		<View className="w-full mb-2">
			{error && <Text className="text-red-500 text-xs mt-1">{error && 'Sample error message'}</Text>}
		</View>
	)

export default Error;